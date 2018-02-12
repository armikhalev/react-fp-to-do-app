import * as React from 'react';
import * as R from 'ramda';

const Container = children => (<div className="container">{children}</div>);
const List = listItems => (<ul>{listItems}</ul>);
const ListItem = ({ name, checked }) =>	(
	<li key={name}>
		Name: {name} Checked: {checked ? 'yes' : 'no'}
	</li>
);

export const ListItems = R.pipe(
	R.prop('items'),
	R.map(ListItem),
	List,
	Container
);
