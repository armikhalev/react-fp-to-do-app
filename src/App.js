import React, { Component } from 'react';
import './App.css';
import { createItem, addItem } from './src/item';
import { ListItems } from './src/list-items';
// import * as R from 'Ramda';

var curItem;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			items: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();

		const createdItem = createItem(curItem.value);
		const updatedItems = addItem(this.state.items, createdItem);
		const setItem = () => ({
			items: updatedItems
		});

		this.setState(setItem);
	}


	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">React to-do app</h1>
				</header>

				<form onSubmit={this.handleSubmit}>
					<label>
						Item:
						<input
							ref={node=> {
								curItem = node;
							}}
							type="text"
							value={this.state.value}
							onChange={this.handleChange}
						/>
					</label>
					<input type="submit" value="Submit" />
				</form>

				<ListItems items={this.state.items} />
			</div>
		);
	}
}

export default App;
