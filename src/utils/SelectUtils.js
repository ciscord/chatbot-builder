import { isArray, isEmpty } from '../lib/lodash';

class SelectUtils {

	static createOptions(list = [], valueName = null, titleName = null) {
		if (!list || !list.length) {
			return [];
		}
		return list.map(item => {
			return {
				value: valueName ? String(item[valueName]) : item,
				title: titleName ? item[titleName] : item,
			};
		});
	};

	static createUsersOptions(usersList = [], titleField = 'email') {
		return SelectUtils.createOptions(usersList, 'id', titleField);
	}

	static createAssigneesOptions(usersList = [], assigneesList = []) {
		if (!isArray(assigneesList) || isEmpty(assigneesList)) {
			return [];
		}
		const assigneeIDs = assigneesList.map(item => item.userID);

		const availableUsersList = usersList.filter(user => {
			return assigneeIDs.includes(user.id);
		});

		return SelectUtils.createUsersOptions(availableUsersList);
	}
}

export default SelectUtils;
export { SelectUtils };
