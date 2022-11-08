import { notification } from 'antd';
import { NOTIFICATION_TYPES } from '../constants/notifications';

class NotificationUtils {

	static show(type, message = '', description = '') {
		notification[type]({
			message,
			description,
		});
	}

	static success(message, description = '') {
		NotificationUtils.show(NOTIFICATION_TYPES.success, message, description);
	}

	static error(message, description = '') {
		NotificationUtils.show(NOTIFICATION_TYPES.error, message, description);
	}

	static info(message, description = '') {
		NotificationUtils.show(NOTIFICATION_TYPES.info, message, description);
	}

	static warning(message, description = '') {
		NotificationUtils.show(NOTIFICATION_TYPES.warning, message, description);
	}
}

export default NotificationUtils;
export { NotificationUtils };
