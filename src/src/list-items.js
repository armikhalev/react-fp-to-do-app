import * as React from 'react';
import * as R from 'ramda';

const Container = children => (<div className="container">{children}</div>);
const List = listItems => (<ul>{listItems}</ul>);
const ListItem = ({ name, checked }) =>	(
	<li key={name}>
					Name: {name} Checked: {checked ? 'yes' : 'no'}
	</li>
);

const renderItems = R.pipe(R.map(ListItem), List, Container);

/* eslint-disable react/prop-types */
export const ListItems = (props) => {
	return (
		<ul>{renderItems(props.items)}</ul>
	);
};
