import * as React from 'react';
import { shallow } from 'enzyme';
import { Checkbox } from '../src/checkbox';

describe('Test checkbox', () => {
  it('should change state on click', () => {
    const wrapper = shallow(<Checkbox />);
    wrapper.simulate('change', { target: { checked: true } });
    expect(
      wrapper.find('input[type="checkbox"][checked="true"]')
    ).toEqual(true);
  });
});
