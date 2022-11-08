import React from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from '../../../redux/auth/selectors';
import { Wrapper } from './UserInfo.style';

const UserInfo = () => {

	const user = useSelector(selectUser);

	const userAvatar = user.avatar
		? <img src={user.avatar} alt={user.name} />
		: <div className="avatar">{user.name.slice(0, 1).toUpperCase()}</div>;

	return (
		<Wrapper>
			{userAvatar}
			<span>{user.name}</span>
		</Wrapper>
	);
};

export default UserInfo;
export { UserInfo };
