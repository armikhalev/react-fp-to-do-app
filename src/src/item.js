import * as React from 'react';
import Checkbox from './checkbox';

// createItem :: string -> Item
export const createItem = (name, remove) =>
  ({
    name,
    checked: false,
    remove
  })
;

// changeState :: Bool -> Bool
export const changeState = (state) => !state;

// addItem :: ([Item], Item) -> [Item]
export const addItem = (arrItems, item) =>
  arrItems.concat(item)
;

// removeItem :: ([Item], Item) -> [Item]
export const removeItem = (arrItems, item) =>
  arrItems
    .filter(_item =>
      _item.name !== item.name
    )
;

export const itemComp = (props) => {
  return (
    <div>
      {props.name}
      {props.checked}
    </div>
  );
};

export const ListItem = ({ name, remove, isChecked }) => (
  <li key={name}>
    <Checkbox
      label={name}
      checked={isChecked}
      key={name} />
    <button onClick={remove}>Remove</button>
  </li>
);
