import React from 'react';
import * as PropTypes from 'prop-types';

import { AbsoluteLayout } from '../layouts';

const AppLoader = ({ visible, message }) => {
	if (!visible) {
		return null;
	}

	return (
		<AbsoluteLayout>
			{message}
		</AbsoluteLayout>
	);
};

AppLoader.propTypes = {
	visible: PropTypes.bool.isRequired,
	message: PropTypes.string,
};

AppLoader.defaultProps = {
	message: 'Loading...',
};

export default AppLoader;
export { AppLoader };
