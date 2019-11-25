import React from 'react';
import { StyledWeek, Active } from './styles';

const classNames = require('classnames');

const Week = (props) => {

	const {
		size,
		active
	} = props;

	const className = classNames(
		'Week'
	);

	return (
		<div className={className}>
			{<StyledWeek size={size}>
				{active && <Active size={size}/>}
			</StyledWeek>}
		</div>
	);
};

export default Week;