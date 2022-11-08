import React from 'react';
import * as PropTypes from 'prop-types';
import LibButton from 'antd/lib/button';

const Button = ({ children, ...restProps }) => {
	return (
		<LibButton
			{...restProps}
		>
			{children}
		</LibButton>
	);
};

Button.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]),
};

Button.defaultProps = {
	children: null,
};

export default Button;
export { Button };
