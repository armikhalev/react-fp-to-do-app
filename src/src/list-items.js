import * as React from 'react';
import * as R from 'ramda';
import { ListItem } from './item';

const Container = children =>
  (<div className="container">{children}</div>);

const List = listItems => (<ul>{listItems}</ul>);

export const ListItems = R.pipe(
  R.prop('items'),
  R.map(ListItem),
  List,
  Container
);
