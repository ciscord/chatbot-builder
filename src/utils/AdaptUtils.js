import { isArray, keys, invert, toInteger } from '../lib/lodash';

const responseFields = {
  organization_id: 'organizationID',
  created_by: 'createdBy',
  project_id: 'projectID',
  user_id: 'userID',
  estimation_hours: 'estimationHours',
  stream_id: 'streamID',
  parent_id: 'parentID',
  timeline_start: 'timelineStart',
  timeline_end: 'timelineEnd',
  task_id: 'taskID',
  token_type: 'tokenType',
  access_token: 'accessToken',
  refresh_token: 'refreshToken',
};

const requestFields = invert(responseFields);

const ignoredFields = [
  'created_at',
  'updated_at',
];

const isIgnored = (fieldName) => {
  return ignoredFields.includes(fieldName);
};

const isID = (fieldName) => {
  if (fieldName.includes('_id') || fieldName.includes('ID')) {
    return true;
  }

  return false;
};

class AdaptUtils {

  static adaptResponse(rawData) {
    if (!rawData) {
      return null;
    }

    if (isArray(rawData)) {
      return AdaptUtils.adaptArray(rawData, responseFields);
    }

    return AdaptUtils.adaptObject(rawData, responseFields);
  }

  static adaptRequest(rawData) {
    if (isArray(rawData)) {
      return AdaptUtils.adaptArray(rawData, requestFields);
    }

    return AdaptUtils.adaptObject(rawData, requestFields);
  }

  static adaptObject(rawObject, fieldsObject) {
    return keys(rawObject).reduce((res, key) => {
      if (isIgnored(key)) {
        return res;
      }

      const resultKey = fieldsObject[key] || key;
      res[resultKey] = isID(resultKey)
        ? toInteger(rawObject[key]) || null
        : rawObject[key];

      return res;
    }, {});
  }

  static adaptArray(rawArray, fieldsObject) {
    return rawArray.map(item => {
      return AdaptUtils.adaptObject(item, fieldsObject);
    });
  }
}

export default AdaptUtils;
export { AdaptUtils };
