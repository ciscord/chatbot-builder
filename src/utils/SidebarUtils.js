import {
	SECTION_KEYS,
	OVERVIEW_KEYS,
	DATAFLOW_KEYS,
	KEYS_ROUTES,
	ROUTES_KEYS,
	DEFAULT_KEY,
} from '../constants/sidebar';

class SidebarUtils {

	static getParentMenuKey(selectedKey) {
		if (OVERVIEW_KEYS.includes(selectedKey)) {
			return SECTION_KEYS.overview;
		}
		if (DATAFLOW_KEYS.includes(selectedKey)) {
			return SECTION_KEYS.dataFlow;
		}

		return null;
	}

	static getRouteByKey(selectedKey) {
		return KEYS_ROUTES[selectedKey] || null;
	}

	static getKeyByRoute(route) {
		return ROUTES_KEYS[route] || DEFAULT_KEY;
	}
}

export default SidebarUtils;
export { SidebarUtils };
