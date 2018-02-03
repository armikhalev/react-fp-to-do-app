import React, { Component } from 'react';
import './App.css';
import { ListItems } from './src/list-items';
import { InputForm } from './src/input';

// TEMP: should be replaced by real data
const ITEMS = [ 1, 2, 3 ]
	.map(num => (
		{
			name: 'item' + num,
			checked: false
		})
	)
;

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">React to-do app</h1>
				</header>
				<InputForm />
				<ListItems items={ITEMS} />
			</div>
		);
	}
}

export default App;
