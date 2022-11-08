import { values } from '../lib/lodash';
import { UI_ROUTES } from '../constants/routes';

class RouterUtils {

	static getUIRoute(pathname = '') {
		const uiRoutes = values(UI_ROUTES);
		for (const route of uiRoutes) {
			if (route === UI_ROUTES.root) {
				continue;
			}
			if (pathname.includes(route)) {
				return route;
			}
		}

		return UI_ROUTES.root;
	}
}

export default RouterUtils;
export { RouterUtils };
