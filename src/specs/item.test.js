import { createItem, changeState } from '../src/item';

describe('Testing item', () => {

	it('should create an item', () => {
		const EXPECTED = {
			name: 'foo',
			checked: false
		};

		expect(createItem('foo')).toEqual(EXPECTED);
	});

	it('should change state to true', () => {

		const STATE = { checked: false };

		expect(changeState(STATE.checked)).toBeTruthy();
	});
});
