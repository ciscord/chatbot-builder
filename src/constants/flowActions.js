export const FLOW_ACTIONS = {
  connect: 'connect',
  combine: 'combine',
  groupBy: 'groupBy',
  dataRange: 'dataRange',
  textExtract: 'textExtract',
  find: 'find',
  replace: 'replace',
  columnRename: 'columnRename',
  sentimentAnalysis: 'sentimentAnalysis',
  math: 'math',
  emailParser: 'emailParser',
};

export const actionsList = [
  { id: FLOW_ACTIONS.connect, name: 'Connect', icon: 'api' },
  { id: FLOW_ACTIONS.combine, name: 'Combine', icon: 'share-alt' },
  { id: FLOW_ACTIONS.groupBy, name: 'Group-By', icon: 'block' },
  { id: FLOW_ACTIONS.dataRange, name: 'Data Range', icon: 'project' },
  { id: FLOW_ACTIONS.textExtract, name: 'Text Extract', icon: 'read' },
  { id: FLOW_ACTIONS.find, name: 'Find', icon: 'monitor' },
  { id: FLOW_ACTIONS.replace, name: 'Replace', icon: 'pull-request' },
  { id: FLOW_ACTIONS.columnRename, name: 'Column Rename', icon: 'file-text' },
  { id: FLOW_ACTIONS.sentimentAnalysis, name: 'Sentiment Analysis', icon: 'smile' },
  { id: FLOW_ACTIONS.math, name: 'Math', icon: 'percentage' },
  { id: FLOW_ACTIONS.emailParser, name: 'Email Address Parser', icon: 'mail' },
];
