export const SYSTEM_TRIGGER_TYPES = {
  connector: 'connector',
  database: 'database',
  email: 'email',
  onComplete: 'onComplete',
  onInteraction: 'onInteraction',
  servicenow: 'servicenow',
  timer: 'timer',
};

export const SYSTEM_TRIGGER_TYPES_TITLES = {
  connector: 'Connector',
  database: 'Database',
  email: 'E-mail',
  onComplete: 'On Complete',
  onInteraction: 'Interaction',
  servicenow: 'ServiceNow',
  timer: 'Interval',
};

export const SYSTEM_TRIGGER_DB_NAMES = {
  connector: 'connector',
  database: 'database',
  email: 'email',
  onComplete: 'on_complete',
  onInteraction: 'on_interaction',
  servicenow: 'servicenow',
  timer: 'timer',
};

export const TRIGGER_TYPES = {
  interval: 'interval',
  onNew: 'onNew',
  onComplete: 'onComplete',
};

export const INTERVALS = {
  none: 'none',
  min1: 'min1',
  min5: 'min5',
  min15: 'min15',
  min30: 'min30',
  hour1: 'hour1',
  hour4: 'hour4',
  hour24: 'hour24',
};

export const INTERVALS_TITLES = {
  none: 'Interval',
  min1: '1 minute',
  min5: '5 minutes',
  min15: '15 minutes',
  min30: '30 minutes',
  hour1: '1 hour',
  hour4: '4 hours',
  hour24: '1 day',
};

export const SYSTEM_INTERVALS = {
  min1: '1m',
  min5: '5m',
  min15: '15m',
  min30: '30m',
  hour1: '1h',
  hour4: '4h',
  hour24: '24h',
};

export const ON_NEW = {
  none: 'none',
  onInteraction: 'onInteraction',
  email: 'email',
  database: 'database',
  connector: 'connector',
  servicenow: 'servicenow',
};

export const ON_NEW_TITLES = {
  none: 'On New',
  onInteraction: 'Interaction',
  email: 'E-mail',
  database: 'Database Entry',
  connector: 'Connector',
  servicenow: 'ServiceNow',
};

export const ON_COMPLETE = {
  none: 'none',
  onComplete: 'onComplete',
};

export const ON_COMPLETE_TITLES = {
  none: 'On Complete',
  onComplete: 'On Task Complete',
};

export const TITLE_PREFIX = {
  [TRIGGER_TYPES.interval]: 'Interval',
  [TRIGGER_TYPES.onNew]: 'On new',
  [TRIGGER_TYPES.onComplete]: 'On complete',
};

export const TITLE_SUFFIX = {
  [SYSTEM_INTERVALS.min1]: INTERVALS_TITLES.min1,
  [SYSTEM_INTERVALS.min5]: INTERVALS_TITLES.min5,
  [SYSTEM_INTERVALS.min15]: INTERVALS_TITLES.min15,
  [SYSTEM_INTERVALS.min30]: INTERVALS_TITLES.min30,
  [SYSTEM_INTERVALS.hour1]: INTERVALS_TITLES.hour1,
  [SYSTEM_INTERVALS.hour4]: INTERVALS_TITLES.hour4,
  [SYSTEM_INTERVALS.hour24]: INTERVALS_TITLES.hour24,

  [ON_NEW.email]: ON_NEW_TITLES.email,
  [ON_NEW.connector]: ON_NEW_TITLES.connector,
  [ON_NEW.database]: ON_NEW_TITLES.database,
  [ON_NEW.onInteraction]: ON_NEW_TITLES.onInteraction,
  [ON_NEW.servicenow]: ON_NEW_TITLES.servicenow,
};
