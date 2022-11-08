import React from 'react';
import {
  ApiOutlined,
  ShareAltOutlined,
  BlockOutlined,
  ProjectOutlined,
  ReadOutlined,
  MonitorOutlined,
  PullRequestOutlined,
  FileTextOutlined,
  SmileOutlined,
  PercentageOutlined,
  MailOutlined,
} from '@ant-design/icons';

import {
  SYSTEM_ACTION_TYPES as sysTypes,
  SYSTEM_ACTION_TYPES_TITLES as sysTitles,
} from '../../constants/actions';

export const actionsButtons = [
  { id: sysTypes.connector, name: sysTitles.connector, icon: <ApiOutlined /> },
  { id: sysTypes.combine, name: sysTitles.combine, icon: <ShareAltOutlined /> },
  { id: sysTypes.groupBy, name: sysTitles.groupBy, icon: <BlockOutlined /> },
  { id: sysTypes.range, name: sysTitles.range, icon: <ProjectOutlined /> },
  { id: sysTypes.textExtract, name: sysTitles.textExtract, icon: <ReadOutlined /> },
  { id: sysTypes.find, name: sysTitles.find, icon: <MonitorOutlined /> },
  { id: sysTypes.replace, name: sysTitles.replace, icon: <PullRequestOutlined /> },
  { id: sysTypes.columnRename, name: sysTitles.columnRename, icon: <FileTextOutlined /> },
  { id: sysTypes.sentimentAnalysis, name: sysTitles.sentimentAnalysis, icon: <SmileOutlined /> },
  { id: sysTypes.math, name: sysTitles.math, icon: <PercentageOutlined /> },
  { id: sysTypes.emailParser, name: sysTitles.emailParser, icon: <MailOutlined /> },
];
