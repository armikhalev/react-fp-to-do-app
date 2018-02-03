import * as React from 'react';
import { shallow } from 'enzyme';
import { InputForm } from '../src/input';

describe.skip('Testing input', () => {
	it('should take input and save it to the database/file', () => {
		const INPUT_ITEM = 'Item: kefir';

		const wrapper = shallow(<InputForm value={INPUT_ITEM}/>);
		expect(wrapper.text()).toEqual(INPUT_ITEM);
	});
});
