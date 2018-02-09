import * as React from 'react';

const renderItems = (items) =>
	items.map(
		(item, num) =>
			(
				<li key={num}>Name: {item.name} Checked: {item.checked ? 'yes' : 'no'}</li>
			)
	)
;

export const ListItems = (props) => {
	return (
		<ul>{renderItems(props.items)}</ul>
	);
};
