import faker from 'faker';

export const mockEmails = Array(10)
  .fill(0)
  .map(() => {
    const email = faker.internet.email();
    return email;
  });

export const mockTags = [
  'users',
  'process',
  'task',
  'net',
  'data',
];
