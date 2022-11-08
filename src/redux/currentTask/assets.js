import { keys, pick, isArray, toInteger } from '../../lib/lodash';
import { TASK_TYPES } from '../../constants/tasks';

export const initBaseData = {
  id: null,
  type: TASK_TYPES.human,
  title: '',
  description: '',
  estimationHours: 0,
  checklist: [],
  assignees: [],
  tags: [],
  streamID: null,
  parentID: null,
  createdBy: null,
  timelineStart: null,
  timelineEnd: null,
};

export const baseDataFields = keys(initBaseData);

export function cleanTaskBaseData(rawData) {
  const arrays = ['checklist', 'assignees', 'tags'];
  return baseDataFields.reduce((res, key) => {
    const value = rawData[key];
    if (!value) {
      return res;
    }

    if (arrays.includes(key) && !value.length) {
      res[key] = [];
      return res;
    }

    res[key] = value;

    if (key === 'estimationHours') {
      res[key] = toInteger(value);
    }

    if (key === 'assignees') {
      res[key] = value.map(id => toInteger(id));
    }

    return res;
  }, {});
}
