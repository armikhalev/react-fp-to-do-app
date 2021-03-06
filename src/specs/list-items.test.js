import * as React from 'react';
import { shallow } from 'enzyme';
import { ListItems } from '../src/list-items';
import { addItem, removeItem } from '../src/item';

const I = 1;
const II = 2;
const III = II + I;

describe('List-items:', () => {
  it('should render items', () => {
    const ITEMS = [ I, II, III ]
      .map(key => (
        {
          name: 'item' + key,
          checked: false
        })
      )
      ;

    /* eslint-disable react/jsx-key*/
    const EXPECTED = [
      (<div className='container'>
        <ul>
          <li key={I}>Name: item1 Checked: no</li>
          <li key={II}>Name: item2 Checked: no</li>
          <li key={III}>Name: item3 Checked: no</li>
        </ul>
      </div>)
    ];

    const wrapper = shallow(<ListItems items={ITEMS} />);
    expect(wrapper.containsAllMatchingElements(EXPECTED)).toEqual(true);
  });

  it('should add an item to the database', () => {

    const ITEMS = [];
    const ITEM = {
      name: 'foo',
      checked: false
    };
    const EXPECTED = [ ITEM ];

    expect(addItem(ITEMS, ITEM)).toEqual(EXPECTED);
  });

  it('should remove an item from the database', () => {
    const ITEM = {
      name: 'foo',
      checked: true
    };
    const ITEMS = [ ITEM ];
    const EXPECTED = [];

    expect(removeItem(ITEMS, ITEM)).toEqual(EXPECTED);
  });
});
