/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Wrapper, Options, Placeholder1, Placeholder, Value, Checkbox, Option } from './MultiCheckSelect.style';

const ChevronDown = () => (
	<svg viewBox="0 0 10 7">
		<path
			d="M2.08578644,6.5 C1.69526215,6.89052429 1.69526215,7.52368927 2.08578644,7.91421356 C2.47631073,8.30473785 3.10947571,8.30473785 3.5,7.91421356 L8.20710678,3.20710678 L3.5,-1.5 C3.10947571,-1.89052429 2.47631073,-1.89052429 2.08578644,-1.5 C1.69526215,-1.10947571 1.69526215,-0.476310729 2.08578644,-0.0857864376 L5.37867966,3.20710678 L2.08578644,6.5 Z"
			transform="translate(5.000000, 3.207107) rotate(90.000000) translate(-5.000000, -3.207107) "
		/>
	</svg>
);

const ChevronUp = () => (
	<svg viewBox="0 0 10 8">
		<path
			d="M2.08578644,7.29289322 C1.69526215,7.68341751 1.69526215,8.31658249 2.08578644,8.70710678 C2.47631073,9.09763107 3.10947571,9.09763107 3.5,8.70710678 L8.20710678,4 L3.5,-0.707106781 C3.10947571,-1.09763107 2.47631073,-1.09763107 2.08578644,-0.707106781 C1.69526215,-0.316582489 1.69526215,0.316582489 2.08578644,0.707106781 L5.37867966,4 L2.08578644,7.29289322 Z"
			transform="translate(5.000000, 4.000000) rotate(-90.000000) translate(-5.000000, -4.000000) "
		/>
	</svg>
);

const Check = () => (
	<svg viewBox="0 0 16 16">
		<path
			d="M13 .156l-1.406 1.438-5.594 5.594-1.594-1.594-1.406-1.438-2.844 2.844 1.438 1.406 3 3 1.406 1.438 1.406-1.438 7-7 1.438-1.406-2.844-2.844z"
			transform="translate(0 1)"
		/>
	</svg>
);

export class MultiCheckSelect extends Component {
	constructor(props) {
		super(props);

		this.state = {
			focusedValue: -1,
			isFocused: false,
			typed: '',
		};
	}

	onFocus = () => {
		this.setState({
			isFocused: true,
		});
	};

	onBlur = () => {
		const { multiple } = this.props;

		this.setState(() => {
			if (multiple) {
				return {
					focusedValue: -1,
					isFocused: false,
				};
			}
				const focusedValue = -1;

				return {
					focusedValue,
					isFocused: false,
				};

		});
	};

	onClickOption = e => {
		const { values } = this.props;

		const { value } = e.currentTarget.dataset;
		const newValues = values;
		const index = newValues.indexOf(value);

		if (index === -1) {
			newValues.push(value);
		} else {
			newValues.splice(index, 1);
		}
		this.props.onChange(newValues);
	};

	stopPropagation = e => {
		e.stopPropagation();
	};

	renderValues = () => {
		const { placeholder, multiple, width, values } = this.props;

		if (values.length === 0) {
			return <Placeholder1>{placeholder}</Placeholder1>;
		}

		if (multiple) {
			const contentWidth = width || 95;
			const countofcharactor = contentWidth / 12;

			let displayedString = values.toString();

			if (displayedString.length > countofcharactor) {
				displayedString = `${displayedString.substring(0, countofcharactor)}...`;
			}
			return <Placeholder>{displayedString}</Placeholder>;
		}

		return <Value>{values[0]}</Value>;
	};

	render() {
		const { isOpen, options, multiple, values } = this.props;

		return (
			<Wrapper tabIndex="0" onBlur={this.onBlur}>
				{isOpen && (
					<Options>
						{options.map(option => {
							const { value, label } = option;
							const selected = values.includes(value);
							return (
								<Option
									key={value}
									data-value={value}
									onMouseOver={this.onHoverOption}
									onClick={this.onClickOption}
									selected={selected}
								>
									{multiple ? <Checkbox selected={selected}>{selected ? <Check /> : null}</Checkbox> : null}
									{label}
								</Option>
							);
						})}
					</Options>
				)}
			</Wrapper>
		);
	}
}
