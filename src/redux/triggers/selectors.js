import { createSelector } from 'reselect';

const systemTriggersList = ({ Triggers }) => Triggers.systemTriggersList;
const trigger = ({ Triggers }) => Triggers.trigger;
const UI = ({ Triggers }) => Triggers.UI;

export const selectSystemTriggersList = createSelector(
  [systemTriggersList],
  (systemTriggersList) => systemTriggersList,
);

export const selectUI = createSelector(
  [UI],
  (UI) => UI,
);

export const selectTrigger = createSelector(
  [trigger],
  (trigger) => trigger,
);
