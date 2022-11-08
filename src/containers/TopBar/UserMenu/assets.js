import { MENU_KEYS, MENU_TITLES } from '../../../constants/userMenu';
import { UI_ROUTES } from '../../../constants/routes';

export const menuItems = [
  { id: MENU_KEYS.workbench, title: MENU_TITLES.workbench },
  { id: MENU_KEYS.profile, title: MENU_TITLES.profile },
  {
    id: MENU_KEYS.organization,
    title: MENU_TITLES.organization,
    children: [
      { id: MENU_KEYS.security, title: MENU_TITLES.security },
      { id: MENU_KEYS.billing, title: MENU_TITLES.billing },
    ],
  },
  { id: MENU_KEYS.logout, title: MENU_TITLES.logout },
];

export const routes = {
  [MENU_KEYS.workbench]: UI_ROUTES.projects,
  [MENU_KEYS.profile]: UI_ROUTES.profile,
  [MENU_KEYS.security]: UI_ROUTES.security,
  [MENU_KEYS.billing]: UI_ROUTES.billing,
};
