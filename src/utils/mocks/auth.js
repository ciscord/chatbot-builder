import uuid from 'uuid/v4';
import faker from 'faker';

const mockUser = {
	id: uuid(),
	name: faker.name.findName(),
	email: faker.internet.email(),
	avatar: faker.image.avatar(),
};

const mockLoginResponse = {
	token_type: 'bearer',
	access_token: uuid(),
	refresh_token: uuid(),
	issued_at: faker.date.recent,
	expires_at: faker.date.soon,
};

export {
	mockUser,
	mockLoginResponse,
};
