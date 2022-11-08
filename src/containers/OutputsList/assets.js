import React from 'react';
import {
  DotChartOutlined,
  TableOutlined,
  FileAddOutlined,
  BellOutlined,
  MessageOutlined,
} from '@ant-design/icons';

import {
  SYSTEM_OUTPUTS_TYPES as sysTypes,
  SYSTEM_OUTPUTS_TYPES_TITLES as sysTitles,
} from '../../constants/outputs';

export const outputsButtons = [
  { id: sysTypes.graph, name: sysTitles.graph, icon: <DotChartOutlined /> },
  { id: sysTypes.table, name: sysTitles.table, icon: <TableOutlined /> },
  { id: sysTypes.createNew, name: sysTitles.createNew, icon: <FileAddOutlined /> },
  { id: sysTypes.notify, name: sysTitles.notify, icon: <BellOutlined /> },
  { id: sysTypes.narrative, name: sysTitles.narrative, icon: <MessageOutlined /> },
];
