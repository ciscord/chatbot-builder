import React from 'react';
import { TASK_TYPES } from '../../../../constants/tasks';

export const fields = {
  assignees: {
    name: 'assignees',
    label: 'Assigned To',
    required: true,
    placeholder: 'Select User...',
  },
  timeline: {
    name: 'timeline',
    label: 'Timeline',
    required: true,
  },
  estimationHours: {
    name: 'estimationHours',
    label: 'Hours',
    required: true,
    placeholder: 'Select hours...',
  },
  tags: {
    name: 'tags',
    label: 'Tags',
    required: false,
    placeholder: 'Select Tags...',
  },
  parentID: {
    name: 'parentID',
    label: 'Parent',
    required: false,
    placeholder: 'Select Parent task...',
  },
  description: {
    name: 'description',
    label: 'Description',
    required: false,
    placeholder: 'Enter description here...',
  },
  type: {
    name: 'type',
    label: 'Task Type',
    required: true,
    defaultValue: TASK_TYPES.human,
  },
  checklist: {
    name: 'checklist',
    label: 'Checklist',
    required: false,
    placeholder: 'Add a Todo...',
  },
};

export const taskTypes = [
  { value: TASK_TYPES.human, title: 'Human' },
  { value: TASK_TYPES.dataFlow, title: 'Data Flow' },
  { value: TASK_TYPES.interaction, title: 'Interaction' },
];
