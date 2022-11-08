import uuid from 'uuid/v4';
import faker from 'faker';

import { FormatUtils } from '../FormatUtils';

const createTasks = (count, projectID) => {
  return Array(count)
  .fill(0)
  .map((_, index) => {
    const tagCount = Math.trunc((count + index) / 2);
    const task = {
      id: uuid(),
      projectID,
      name: faker.commerce.department(),
      author: faker.name.findName(),
      expired: FormatUtils.formatDate(faker.date.future()),
      order: index,
      tags: Array(tagCount).fill(0).map(() => {
        const tag = faker.lorem.word();
        return tag.slice(0, 6);
      }),
      users: Array(tagCount).fill(0).map(() => {
        const userName = faker.name.findName();
        return userName;
      }),
    };

    return task;
  });
};

const createProjects = (count, projectID = null) => {
  return Array(count)
    .fill(0)
    .map((_, index) => {
      const project = {
        id: uuid(),
        parentID: projectID,
        name: faker.commerce.department(),
        modified: FormatUtils.formatDate(faker.date.recent()),
        image: faker.image.image(160, 160),
        active: (index % 2 === 0),
        order: index,
      };

      const subCount = !projectID ? count + index : 0;
      const subProjects = createProjects(subCount, project.id);

      subProjects.forEach((subProject, index) => {
        subProject.tasks = createTasks(subCount + 1, subProject.id);
      });

      project.subProjects = subProjects;

      return project;
    });
};

export const mockProjects = createProjects(4);

export const flattenProjects = (projects = mockProjects) => {

  const subProjects = projects.reduce((result, project) => {
    result.push(...project.subProjects);
    return result;
  }, []);

  const tasks = subProjects.reduce((result, subProject) => {
    result.push(...subProject.tasks);
    return result;
  }, []);

  return {
    subProjects,
    tasks,
  };
};

export const blankProject = {
  ...mockProjects[0],
  name: 'Blank Project',
  id: '0f83c71b-628f-4a69-96e6-8550ac45f42b',
};
