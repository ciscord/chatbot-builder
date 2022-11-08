import React, { Component } from 'react';
import InteractionTasks from '../../components/Interaction/InteractionTasks';

class Interactions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false,
		};
	}

	onCollapse = collapsed => {
		// console.log('Collapsible Clicked');
		// console.log(collapsed);
		this.setState({ collapsed });
	};

	render() {
		return <InteractionTasks />;
	}
}

export default Interactions;
export { Interactions };
