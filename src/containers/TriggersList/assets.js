import {
  INTERVALS,
  INTERVALS_TITLES,
  ON_NEW,
  ON_NEW_TITLES,
  ON_COMPLETE,
  ON_COMPLETE_TITLES,
} from '../../constants/triggers';

export const intervalOptions = [
  { value: INTERVALS.none, title: INTERVALS_TITLES.none },
  { value: INTERVALS.min1, title: INTERVALS_TITLES.min1 },
  { value: INTERVALS.min5, title: INTERVALS_TITLES.min5 },
  { value: INTERVALS.min15, title: INTERVALS_TITLES.min15 },
  { value: INTERVALS.min30, title: INTERVALS_TITLES.min30 },
  { value: INTERVALS.hour1, title: INTERVALS_TITLES.hour1 },
  { value: INTERVALS.hour4, title: INTERVALS_TITLES.hour4 },
  { value: INTERVALS.hour24, title: INTERVALS_TITLES.hour24 },
];

export const onNewOptions = [
  { value: ON_NEW.none, title: ON_NEW_TITLES.none },
  { value: ON_NEW.onInteraction, title: ON_NEW_TITLES.onInteraction },
  { value: ON_NEW.email, title: ON_NEW_TITLES.email, disabled: true },
  { value: ON_NEW.database, title: ON_NEW_TITLES.database, disabled: true },
  { value: ON_NEW.connector, title: ON_NEW_TITLES.connector, disabled: true },
  { value: ON_NEW.servicenow, title: ON_NEW_TITLES.servicenow, disabled: true },
];

export const onCompleteOptions = [
  { value: ON_COMPLETE.none, title: ON_COMPLETE_TITLES.none },
  { value: ON_COMPLETE.onComplete, title: ON_COMPLETE_TITLES.onComplete },
];
