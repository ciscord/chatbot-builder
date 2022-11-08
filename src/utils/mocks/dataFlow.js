export const mockActions = [
  { id: '70a51895-b004-4e23-87a1-98bfee60a2c8', type: 'connector' },
  { id: '84751895-b004-4e23-87a1-98bfee60aabb', type: 'combine' },
];

export const mockFunctions = [
  {
    id: '59db2b91-da11-4bc5-aad0-5c624649eb6b',
    name: 'ServiceNow Connector',
    actionType: 'connector',
    actionID: '70a51895-b004-4e23-87a1-98bfee60a2c8',
    inputs: {
      url: 'https://dev51548.service-now.com/',
      method: 'GET',
      username: 'admin',
      password: 'admin',
      interval: 'hour4',
    },
  },
  {
    id: 'ff3b2b91-da11-4bc5-aad0-5c624649eac5',
    name: 'Salesforce Connector',
    actionType: 'connector',
    actionID: '70a51895-b004-4e23-87a1-98bfee60a2c8',
    inputs: {
      url: 'https://salesforce.com/',
      method: 'GET',
      username: 'admin',
      password: 'admin',
      interval: 'min15',
    },
  },
];
