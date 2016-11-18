var getOPath = function(obj, path, def = undefined) {
	if (typeof obj === 'undefined') {
		throw error('You must pass an object');
	}

	if (typeof path === 'undefined') {
		throw error('You must pass a path.');
	}

	path = path.split('.');
	let result = obj;

	path.forEach(i => {
		if (result === undefined) return;
		result = result[i];
	});

	return typeof result === 'undefined' ? def : result;
}

module.exports = getOPath; 
