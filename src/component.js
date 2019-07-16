const component = {
	test: () => {
		console.log('hello from component');
		throw new Error('error');
	}
}

export default component;