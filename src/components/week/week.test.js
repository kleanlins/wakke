import React from "react";
import {shallow} from 'enzyme';
import Week from '.'

describe('Week', () => {
	it('should render correctly', () => {
		const component = shallow(<Week />);
		expect(component.find('.Week').length).toEqual(1);
	});
});
