import { STORAGE_KEYS } from '../constants/storage';

class StorageUtils {

	// Common
	static storeValue(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	}

	static restoreValue(key, defaultValue = null) {
		const value = localStorage.getItem(key);
		try {
			const parsedValue = JSON.parse(value);
			return parsedValue || defaultValue;
		} catch (e) {
			return defaultValue;
		}
	}

	static clearValue(key) {
		localStorage.removeItem(key);
	}

	static clearAll() {
		localStorage.clear();
	}

	// TODO: remove Auth: User
	static storeUser(user) {
		StorageUtils.storeValue(STORAGE_KEYS.user, user);
	}

	static restoreUser() {
		return StorageUtils.restoreValue(STORAGE_KEYS.user, null);
	}

	static clearUser() {
		return StorageUtils.clearValue(STORAGE_KEYS.user);
	}

	// Auth
	static storeAccessToken(accessToken = '') {
		StorageUtils.storeValue(STORAGE_KEYS.accessToken, accessToken);
	}

	static restoreAccessToken() {
		return StorageUtils.restoreValue(STORAGE_KEYS.accessToken, '');
	}

	static clearAccessToken() {
		StorageUtils.clearValue(STORAGE_KEYS.accessToken);
	}

	static storeRefreshToken(refreshToken = '') {
		StorageUtils.storeValue(STORAGE_KEYS.refreshToken, refreshToken);
	}

	static restoreRefreshToken() {
		return StorageUtils.restoreValue(STORAGE_KEYS.refreshToken, '');
	}

	static clearRefreshToken() {
		StorageUtils.clearValue(STORAGE_KEYS.refreshToken);
	}

	static storeTokens(accessToken, refreshToken) {
		StorageUtils.storeAccessToken(accessToken);
		StorageUtils.storeRefreshToken(refreshToken);
	}

	static restoreTokens() {
		return {
			accessToken: StorageUtils.restoreAccessToken(),
			refreshToken: StorageUtils.restoreRefreshToken(),
		};
	}

	static clearTokens() {
		StorageUtils.clearAccessToken();
		StorageUtils.clearRefreshToken();
	}

	// TODO: remove Projects
	static storeProjects(projects) {
		StorageUtils.storeValue(STORAGE_KEYS.projects, projects);
	}

	static restoreProjects() {
		return StorageUtils.restoreValue(STORAGE_KEYS.projects, null);
	}

	static clearProjects() {
		return StorageUtils.clearValue(STORAGE_KEYS.projects);
	}
}

export default StorageUtils;
export { StorageUtils };
