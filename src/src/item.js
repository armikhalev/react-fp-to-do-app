import * as React from 'react';

// createItem :: string -> Item
export const createItem = (name) =>
  ({
    name,
    checked: false
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

export const ListItem = ({ name, checked }) => (
  <li key={name}>
    Name: {name} Checked: {checked ? 'yes' : 'no'}
  </li>
);
