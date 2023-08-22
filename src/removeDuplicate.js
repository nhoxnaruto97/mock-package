function removeDuplicate(str) {
	return str
		.split('')
		.filter((char, index) => str.indexOf(char) === index)
		.join('');
}

export default removeDuplicate;
