import * as PropTypes from 'prop-types';

import { INTERVALS, INTERVALS_TITLES } from '../../../constants/triggers';
import { FIELD_TYPES } from '../../../constants/forms';

export const propTypes = {
  actionID: PropTypes.string,
  initValues: PropTypes.object,
  onSubmit: PropTypes.func,
  onRequest: PropTypes.func,
};

export const defaultProps = {
  actionID: '',
  initValues: {},
  onSubmit: () => {},
  onRequest: () => {},
};

export const intervalOptions = [
  { value: '', title: '' },
  { value: INTERVALS.min1, title: INTERVALS_TITLES.min1 },
  { value: INTERVALS.min5, title: INTERVALS_TITLES.min5 },
  { value: INTERVALS.min15, title: INTERVALS_TITLES.min15 },
  { value: INTERVALS.min30, title: INTERVALS_TITLES.min30 },
  { value: INTERVALS.hour1, title: INTERVALS_TITLES.hour1 },
  { value: INTERVALS.hour4, title: INTERVALS_TITLES.hour4 },
  { value: INTERVALS.hour24, title: INTERVALS_TITLES.hour24 },
];

export const methodOptions = [
  { value: 'GET', title: 'GET' },
  { value: 'POST', title: 'POST' },
  { value: 'PUT', title: 'PUT' },
  { value: 'PATCH', title: 'PATCH' },
];

export const mailServerOptions = [
  { value: 'microsoft.com', title: 'Microsoft' },
  { value: 'gmail.com', title: 'Google' },
];

export const aggregationOptions = [
  { value: 'count', title: 'Count' },
  { value: 'sum', title: 'Sum' },
  { value: 'average', title: 'Average' },
  { value: 'min', title: 'Min' },
  { value: 'max', title: 'Max' },
];

export const rangeOptions = [
  { value: 'min', title: 'Min' },
  { value: 'max', title: 'Max' },
];

export const fields = {
  email: [
    { name: 'server', label: 'Server', type: FIELD_TYPES.select, required: true, options: mailServerOptions },
    { name: 'username', label: 'Username', type: FIELD_TYPES.input, required: true },
    { name: 'password', label: 'Password', type: FIELD_TYPES.password, required: true },
    { name: 'interval', label: 'Interval', type: FIELD_TYPES.select, required: true, options: intervalOptions },
  ],
  servicenow: [
    { name: 'instance', label: 'Instance', type: FIELD_TYPES.input, required: true },
    { name: 'username', label: 'Username', type: FIELD_TYPES.input, required: true },
    { name: 'password', label: 'Password', type: FIELD_TYPES.password, required: true },
    { name: 'interval', label: 'Interval', type: FIELD_TYPES.select, required: true, options: intervalOptions },
    // will be rendered in component manually:
    // { name: 'columns', label: 'Columns', type: 'Array of Input', required: false },
  ],
  database: [
    { name: 'driver_name', label: 'Driver Name', type: FIELD_TYPES.input, required: true },
    { name: 'host', label: 'Host', type: FIELD_TYPES.input, required: false },
    { name: 'port', label: 'Port', type: FIELD_TYPES.input, required: false },
    { name: 'database', label: 'Database', type: FIELD_TYPES.input, required: false },
    { name: 'connection_url', label: 'Connection URL', type: FIELD_TYPES.input, required: false },
    { name: 'query', label: 'Query', type: FIELD_TYPES.input, required: true },
    { name: 'ssl_mode', label: 'SSL Mode', type: FIELD_TYPES.checkbox, required: false },
    { name: 'username', label: 'Username', type: FIELD_TYPES.input, required: true },
    { name: 'password', label: 'Password', type: FIELD_TYPES.password, required: true },
    { name: 'interval', label: 'Interval', type: FIELD_TYPES.select, required: true, options: intervalOptions },
    // will be rendered in component manually:
    // { name: 'arguments', label: 'Arguments', type: 'Array of Input', required: false },
  ],
  onComplete: [
    // options will be created in render function - it depends from selected project
    { name: 'task_id', label: 'Task ID', type: FIELD_TYPES.selectInteger, required: true, options: [] },
  ],
  onInteraction: [
    { name: 'intent', label: 'Intent Name', type: FIELD_TYPES.input, required: true },
  ],
  combine: [
    // options will be created in render function - it depends from selected project
    { name: 'sources', label: 'Sources', type: FIELD_TYPES.multiSelect, required: true, options: [] },
    { name: 'on_conflict', label: 'On Conflict', type: FIELD_TYPES.checkbox },
    // will be rendered in component manually:
    // { name: 'columns', label: 'Columns', type: 'Array of Input', required: true },
  ],
  groupBy: [
    // options will be created in render function - it depends from selected project
    { name: 'sources', label: 'Sources', type: FIELD_TYPES.multiSelect, required: true, options: [] },
    { name: 'aggregation_type', label: 'Aggregation Type', type: FIELD_TYPES.select, required: true, options: aggregationOptions },
    { name: 'aggregation_column', label: 'Aggregation Column', type: FIELD_TYPES.input, required: true },
    // will be rendered in component manually:
    // { name: 'group_by', label: 'Columns', type: 'Array of Input', required: true },
  ],
  range: [
    // options will be created in render function - it depends from selected project
    { name: 'sources', label: 'Sources', type: FIELD_TYPES.multiSelect, required: true, options: [] },
    { name: 'operation', label: 'Operation', type: FIELD_TYPES.select, required: true, options: rangeOptions },
    { name: 'range_begin', label: 'Range Begin', type: FIELD_TYPES.input, required: true },
    { name: 'range_end', label: 'Range End', type: FIELD_TYPES.input, required: true },
    { name: 'new_column_name', label: 'New Column Name', type: FIELD_TYPES.input, required: true },
  ],
  narrative: [
    { name: 'template', label: 'Template', type: FIELD_TYPES.input, required: true },
    // will be rendered in component manually:
    // { name: 'parameters', label: 'Parameters', type: 'Array of Objects', required: true },
  ],
  table: [
    // will be rendered in component manually:
    // { name: 'data', label: 'Data', type: 'Array of Arrays ???', required: true },
    // { name: 'header', label: 'Header', type: 'Array of String', required: true },
  ],
};

export const connectorRequestFields = {
  url: { name: 'url', type: FIELD_TYPES.input, placeholder: 'URL (required)', required: true, noLabel: true },
  method: { name: 'method', type: FIELD_TYPES.select, options: methodOptions, placeholder: 'Method (required)', required: true, noLabel: true },
  authBasic: [
    { name: 'username', placeholder: 'Username', type: FIELD_TYPES.input, noLabel: true },
    { name: 'password', placeholder: 'Password', type: FIELD_TYPES.password, noLabel: true },
  ],
  authBearer: [
    { name: 'token', placeholder: 'Token', type: FIELD_TYPES.input, noLabel: true },
  ],
  headers: [],
  params: [],
  body: [
    { name: 'type', placeholder: 'Type', type: FIELD_TYPES.input, noLabel: true },
    { name: 'raw', placeholder: 'Raw', type: FIELD_TYPES.input, noLabel: true },
  ],
  paginationClassic: [
    { name: 'count_key', placeholder: 'Count key', type: FIELD_TYPES.input, noLabel: true },
    { name: 'count_value', placeholder: 'Count value', type: FIELD_TYPES.input, noLabel: true },
    { name: 'increment', placeholder: 'Increment', type: FIELD_TYPES.input, noLabel: true },
    { name: 'page_key', placeholder: 'Page Key', type: FIELD_TYPES.input, noLabel: true },
    { name: 'page_number', placeholder: 'Page number', type: FIELD_TYPES.input, noLabel: true },
  ],
  paginationCursor: [
    { name: 'cursor_key', placeholder: 'Cursor Key', type: FIELD_TYPES.input, noLabel: true },
    { name: 'cursor_value', placeholder: 'Cursor Value', type: FIELD_TYPES.input, noLabel: true },
    { name: 'param_key', placeholder: 'Param key', type: FIELD_TYPES.input, noLabel: true },
  ],
  paginationMaxPages: { name: 'max_pages', placeholder: 'Maximum Pages', type: FIELD_TYPES.input, noLabel: true },
};

export const authTypes = {
  basic: 'basic',
  bearer: 'bearer',
};

export const paginationTypes = {
  classic: 'classic',
  cursor: 'cursor',
};

export const authTypeOptions = [
  { value: authTypes.basic, title: 'Basic' },
  { value: authTypes.bearer, title: 'Bearer' },
];

export const paginationTypeOptions = [
  { value: paginationTypes.classic, title: 'Classic' },
  { value: paginationTypes.cursor, title: 'Cursor' },
];