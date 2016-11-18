let getOPath = require('../getOPath');

var obj = {
	user: {
		firstname: 'Sergio'
	},
	cities: ['Tegucigalpa']
};

test('It fails when not given an object', () => {
	expect(() => {
		getOPath();
	}).toThrow();
});

test('It fails when not given a path', () => {
	expect(() => {
		getOPath(obj);
	}).toThrow();
});

test('It should return the value for the given path', () => {
	expect(getOPath(obj, 'user.firstname')).toBe('Sergio');
});

test('It should return the default value if path is not valid', () => {
	expect(getOPath(obj, 'user.lastname', 'Hello')).toBe('Hello');
});

test('It should return undefined for an invalid path when no default is provided', () => {
	expect(getOPath(obj, 'invalid.key')).toBe(undefined);
});
