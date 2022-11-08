import * as yup from 'yup';
import { ValidatorUtils as Utils } from '../ValidatorUtils';

export const emailTriggerSchema = yup.object().shape({
  server: Utils.stringRequired('Server'),
  username: Utils.stringRequired('Username'),
  password: Utils.stringRequired('Password'),
  interval: Utils.stringRequired('Interval'),
});

export const serviceNowTriggerSchema = yup.object().shape({
  instance: Utils.stringRequired('Instance'),
  username: Utils.stringRequired('Username'),
  password: Utils.stringRequired('Password'),
  interval: Utils.stringRequired('Interval'),
});

export const databaseTriggerSchema = yup.object().shape({
  driverName: Utils.stringRequired('Driver Name'),
  query: Utils.stringRequired('Query'),
  interval: Utils.stringRequired('Interval'),
});

export const onCompleteTriggerSchema = yup.object().shape({
  task_id: Utils.stringRequired('Task ID'),
});

export const onInteractionTriggerSchema = yup.object().shape({
  intent: Utils.stringRequired('Intent Name'),
});

export const connectorTriggerSchema = yup.object().shape({
  url: Utils.stringRequired('URL'),
  method: Utils.stringRequired('Method'),
});

export const combineSchema = yup.object().shape({
  sources: Utils.arrayStringRequired('Sources'),
  columns: Utils.arrayStringRequired('Columns'),
});

export const groupBySchema = yup.object().shape({
  sources: Utils.arrayStringRequired('Sources'),
  group_by: Utils.arrayStringRequired('Group By'),
  aggregation_type: Utils.stringRequired('Aggregation Type'),
  aggregation_column: Utils.stringRequired('Aggregation Column'),
});

export const rangeSchema = yup.object().shape({
  sources: Utils.arrayStringRequired('Sources'),
  operation: Utils.stringRequired('Operation'),
  range_begin: Utils.stringRequired('Range Begin'),
  range_end: Utils.stringRequired('Range End'),
  new_column_name: Utils.stringRequired('New Column Name'),
});

export const narrativeSchema = yup.object().shape({
  template: Utils.stringRequired('Template'),
});
