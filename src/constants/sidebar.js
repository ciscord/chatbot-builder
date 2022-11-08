import { UI_ROUTES } from './routes';
import { invert } from '../lib/lodash';

export const SECTION_KEYS = {
  overview: 'overview',
  projects: 'projects',
  metrics: 'metrics',
  dataFlow: 'dataFlow',
  triggers: 'triggers',
  actions: 'actions',
  outputs: 'outputs',
  interaction: 'interaction',
  training: 'training',
  deployment: 'deployment',
  adoption: 'adoption',
};

const keys = SECTION_KEYS;

export const SECTION_TITLES = {
  [keys.overview]: 'Overview',
  [keys.projects]: 'Projects',
  [keys.metrics]: 'Metrics',
  [keys.dataFlow]: 'Data Flow',
  [keys.triggers]: 'Triggers',
  [keys.actions]: 'Actions',
  [keys.outputs]: 'Outputs',
  [keys.interaction]: 'Interaction',
  [keys.training]: 'Training',
  [keys.deployment]: 'Deployment',
  [keys.adoption]: 'Adoption',
};

export const SECTION_ICONS = {
  [keys.overview]: 'dashboard',
  [keys.dataFlow]: 'apartment',
  [keys.interaction]: 'message',
  [keys.training]: 'filter',
  [keys.deployment]: 'rocket',
  [keys.adoption]: 'usergroup-add',
};

export const DEFAULT_KEY = keys.projects;

const titles = SECTION_TITLES;
const icons = SECTION_ICONS;

export const SECTIONS = [
  {
    key: keys.overview,
    title: titles[keys.overview],
    icon: icons[keys.overview],
    children: [
      { key: DEFAULT_KEY, title: titles[keys.projects] },
      { key: keys.metrics, title: titles[keys.metrics] },
    ],
  },
  {
    key: keys.dataFlow,
    title: titles[keys.dataFlow],
    icon: icons[keys.dataFlow],
    children: [
      { key: keys.triggers, title: titles[keys.triggers] },
      { key: keys.actions, title: titles[keys.actions] },
      { key: keys.outputs, title: titles[keys.outputs] },
    ],
  },
  {
    key: keys.interaction,
    title: titles[keys.interaction],
    icon: icons[keys.interaction],
  },
  {
    key: keys.training,
    title: titles[keys.training],
    icon: icons[keys.training],
  },
  {
    key: keys.deployment,
    title: titles[keys.deployment],
    icon: icons[keys.deployment],
  },
  {
    key: keys.adoption,
    title: titles[keys.adoption],
    icon: icons[keys.adoption],
  },
];

export const KEYS_ROUTES = {
  [keys.projects]: UI_ROUTES.projects,
  [keys.metrics]: UI_ROUTES.metrics,
  [keys.triggers]: UI_ROUTES.triggers,
  [keys.actions]: UI_ROUTES.actions,
  [keys.outputs]: UI_ROUTES.outputs,
  [keys.interaction]: UI_ROUTES.interaction,
  [keys.training]: UI_ROUTES.training,
  [keys.deployment]: UI_ROUTES.deployment,
  [keys.adoption]: UI_ROUTES.adoption,
};

export const ROUTES_KEYS = invert(KEYS_ROUTES);

export const OVERVIEW_KEYS = [
  keys.projects,
  keys.metrics,
];

export const DATAFLOW_KEYS = [
  keys.triggers,
  keys.actions,
  keys.outputs,
];

export const PARENT_KEYS_ROUTES = {
  [keys.overview]: UI_ROUTES.projects,
  [keys.dataFlow]: UI_ROUTES.actions,
};
