import { keys, invert, isArray, isEmpty, find } from '../lib/lodash';
import { CommonUtils } from './CommonUtils';
import {
  SYSTEM_TRIGGER_TYPES,
  SYSTEM_TRIGGER_DB_NAMES,
  SYSTEM_INTERVALS,
  TRIGGER_TYPES,
  INTERVALS,
  ON_NEW,
  ON_COMPLETE,
} from '../constants/triggers';
import { SYSTEM_ACTION_DB_NAMES, SYSTEM_ACTION_TYPES } from '../constants/actions';
import { SYSTEM_OUTPUTS_DB_NAMES } from '../constants/outputs';

const invertedTriggerDBNames = invert(SYSTEM_TRIGGER_DB_NAMES);
const invertedSystemIntervals = invert(SYSTEM_INTERVALS);
const invertedActionDBNames = invert(SYSTEM_ACTION_DB_NAMES);
const invertedOutputDBNames = invert(SYSTEM_OUTPUTS_DB_NAMES);

class DataFlowUtils {

  static createConnectorInputs(inputs) {
    const request = {};

    request.url = inputs.url;
    request.method = inputs.method;

    if (inputs.username && inputs.password) {
      request.auth = {
        basic: {
          username: inputs.username,
          password: inputs.password,
        },
      };
    }

    if (inputs.token) {
      request.auth = {
        bearer: {
          token: inputs.token,
        },
      };
    }

    // TODO: add the rest params: headers, body, pagination and so on...

    return {
      request,
      interval: inputs.interval || '24h',
    };
  }

  static createTriggerInputs(taskID, trigger) {
    const { type, systemType, inputs } = trigger;
    if (systemType === SYSTEM_TRIGGER_TYPES.timer) {
      return {
        interval: SYSTEM_INTERVALS[type],
      };
    }

    if (systemType === SYSTEM_TRIGGER_TYPES.onComplete) {
      return {
        task_id: taskID,
      };
    }

    if (systemType === SYSTEM_TRIGGER_TYPES.connector) {
      return DataFlowUtils.createConnectorInputs(inputs);
    }

    return trigger.inputs;
  }

  static createActionInputs(actionType, inputs) {
    if (actionType === SYSTEM_ACTION_TYPES.connector) {
      return DataFlowUtils.createConnectorInputs(inputs);
    }

    return keys(inputs).reduce((result, key) => {

      result[key] = inputs[key];
      if (key === 'interval') {
        const value = inputs[key];
        result[key] = SYSTEM_INTERVALS[value];
      }

      return result;
    }, {});
  }

  static createOutputsSchema(output) {
    const { systemType, inputs, outputs } = output;
    const type = SYSTEM_OUTPUTS_DB_NAMES[systemType];
    if (!type) {
      return [];
    }
    
    return [
      {
        id: CommonUtils.newID(),
        type,
        inputs,
        outputs,
      },
    ];
  }

  static createSchema(taskID, trigger, actionsList, functionsList, output) {

    const triggerSchema = {
      id: CommonUtils.newID(),
      type: SYSTEM_TRIGGER_DB_NAMES[trigger.systemType],
      name: SYSTEM_TRIGGER_DB_NAMES[trigger.systemType],
      inputs: DataFlowUtils.createTriggerInputs(taskID, trigger),
      outputs: trigger.outputs || {},
    };

    const actions = [];

    actionsList.forEach(action => {
      const actionID = action.id;
      const actionType = action.type;

      const functions = functionsList.filter(func => func.actionID === actionID);
      if (!functions.length) {
        return;
      }

      functions.forEach(func => {
        actions.push({
          id: func.id,
          type: SYSTEM_ACTION_DB_NAMES[actionType],
          name: func.name,
          inputs: DataFlowUtils.createActionInputs(actionType, func.inputs),
          outputs: func.outputs || {},
        });
      });
    });

    return {
      id: taskID,
      trigger: triggerSchema,
      actions,
      outputs: DataFlowUtils.createOutputsSchema(output),
    };
  }

  static parseTriggerUI(trigger) {
    const { type, inputs } = trigger;
    const systemType = invertedTriggerDBNames[type];

    let triggerType = TRIGGER_TYPES.interval;
    if (systemType === SYSTEM_TRIGGER_TYPES.onComplete) {
      triggerType = TRIGGER_TYPES.onComplete;
    }
    if (systemType === SYSTEM_TRIGGER_TYPES.onInteraction) {
      triggerType = TRIGGER_TYPES.onNew;
    }

    const onNewType = (triggerType === TRIGGER_TYPES.onNew)
      ? systemType
      : ON_NEW.none;

    const onCompleteType = (triggerType === TRIGGER_TYPES.onComplete)
      ? systemType
      : ON_COMPLETE.none;

    let intervalType = INTERVALS.none;
    if (triggerType === TRIGGER_TYPES.interval) {
      intervalType = invertedSystemIntervals[inputs.interval];
    }

    return {
      triggerType,
      intervalType,
      onNewType,
      onCompleteType,
    };
  }

  static parseConnectorInputs(inputs) {
    const { interval, request } = inputs;

    const url = request?.url || '';
    const method = request?.method || '';

    const username = request?.auth?.basic?.username || '';
    const password = request?.auth?.basic?.password || '';
    const token = request?.auth?.bearer?.token || '';

    // TODO: add parsing the rest fields: headers, body, pagination and so on

    return {
      interval,
      url,
      method,
      username,
      password,
      token,
    };
  }

  static parseTriggerInputs(trigger) {
    const { type, inputs } = trigger;
    const systemType = invertedTriggerDBNames[type];

    if (systemType === SYSTEM_TRIGGER_TYPES.connector) {
      return DataFlowUtils.parseConnectorInputs(inputs);
    }

    return inputs;
  }

  static parseTriggerDetails(trigger, UI) {
    const { type } = trigger;
    const { triggerType } = UI;
    const systemType = invertedTriggerDBNames[type];

    return {
      systemType,
      triggerType,
      inputs: DataFlowUtils.parseTriggerInputs(trigger),
    };
  }

  static parseTrigger(trigger) {
    const UI = DataFlowUtils.parseTriggerUI(trigger);
    const triggerDetails = DataFlowUtils.parseTriggerDetails(trigger, UI);

    return {
      UI,
      trigger: triggerDetails,
    };
  }

  static parseActions(actions) {
    if (!isArray(actions) || isEmpty(actions)) {
      return {
        actionsList: [],
        functionsList: [],
      };
    }

    const actionsTypes = actions.reduce((result, func) => {
      const { type } = func;
      if (!result.includes(type)) {
        result.push(type);
      }
      return result;
    }, []);

    const actionsList = actionsTypes.map(systemType => {
      return {
        id: CommonUtils.newID(),
        type: invertedActionDBNames[systemType],
      };
    });

    const functionsList = actions.map(func => {
      const { id, type, name, inputs, outputs } = func;
      const actionType = invertedActionDBNames[type];
      const action = find(actionsList, { type: actionType });

      return {
        id,
        name,
        actionType,
        inputs,
        outputs,
        actionID: action.id,
      };
    });

    return {
      actionsList,
      functionsList,
    };
  }

  static parseOutputs(outputs) {
    if (!isArray(outputs) || isEmpty(outputs)) {
      return {};
    }

    const first = outputs[0];

    return {
      systemType: invertedOutputDBNames[first.type],
      inputs: first.inputs,
      outputs: first.outputs,
    };
  }

  static parseSchema(schema) {
    if (!schema) {
      return {
        triggerData: null,
        actionsList: [],
        functionsList: [],
      };
    }

    const { trigger, actions, outputs } = schema;

    const triggerData = DataFlowUtils.parseTrigger(trigger);
    const { actionsList, functionsList } = DataFlowUtils.parseActions(actions);

    return {
      triggerData,
      actionsList,
      functionsList,
      output: DataFlowUtils.parseOutputs(outputs),
    };
  }
}

export default DataFlowUtils;
export { DataFlowUtils };

/**
  DataFlow Schema:

  const schema = {
    "trigger": {
      "id": "trigger",
      "type": "trigger",
      "name": "Retrieve new emails",
      "inputs": {
        "param1": "somevalue",
        "param2": true,
        "param3": 7,
        "param4": 0.99
      }
    },
    "actions": [
      {
        "id": "action1",
        "type": "action",
        "name": "First action",
        "inputs": {
          "param1": "=$trigger.result"
        }
      },
      {
        "id": "action2",
        "type": "action",
        "name": "Second action",
        "inputs": {
          "param1": "somevalue",
          "param2": "=$trigger.result",
          "param3": "=$action1.result.profile.name",
          "param4": [
            "=$trigger.result",
            "=$action1.result.profile.name"
          ],
          "param5": {
            "field1": "=$trigger.result",
            "field2": "somevalue"
          },
          "param6": {
            "loop": {
              "for": "=$trigger.result.array",
              "do": "=$loop"
            }
          },
          "param7": {
            "loop": {
              "for": "=$trigger.result.array",
              "do": "=$loop.field"
            }
          },
          "param8": {
            "loop": {
              "for": "=$trigger.result.array",
              "do": {
                "field1": "=$loop.field1",
                "field2": "=$trigger.result.object",
                "field3": "somevalue"
              }
            }
          }
        }
      }
    ]
  }
*/
