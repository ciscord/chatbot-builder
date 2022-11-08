import {
  TRIGGER_TYPES,
  TITLE_PREFIX,
  TITLE_SUFFIX,
} from '../../../constants/triggers';

export function createCardTitle(trigger) {
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
