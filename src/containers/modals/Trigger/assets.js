import {
  SYSTEM_TRIGGER_TYPES as sysTypes,
  SYSTEM_TRIGGER_TYPES_TITLES as sysTitles,
  TRIGGER_TYPES,
  TITLE_PREFIX,
  TITLE_SUFFIX,
} from '../../../constants/triggers';

export function createModalTitle(trigger) {
  const { triggerType, systemType, inputs } = trigger;
  const prefix = TITLE_PREFIX[triggerType];

  if (triggerType === TRIGGER_TYPES.onComplete) {
    return prefix;
  }
  if (triggerType === TRIGGER_TYPES.onNew) {
    return `${prefix}: ${TITLE_SUFFIX[systemType]}`;
  }

  const { interval } = inputs;
  if (!interval) {
    return `${prefix}: No time`;
  }

  return `${prefix}: ${TITLE_SUFFIX[interval]}`;
}

export const systemTypeOptions = {
  [TRIGGER_TYPES.interval]: [
    { value: sysTypes.email, title: sysTitles.email },
    { value: sysTypes.database, title: sysTitles.database },
    { value: sysTypes.servicenow, title: sysTitles.servicenow },
    { value: sysTypes.connector, title: sysTitles.connector },
  ],
  [TRIGGER_TYPES.onNew]: [
    { value: sysTypes.onInteraction, title: sysTitles.onInteraction },
  ],
  [TRIGGER_TYPES.onComplete]: [
    { value: sysTypes.onComplete, title: sysTitles.onComplete },
  ],
};
