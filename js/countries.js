/* countries.js */

/**
 * @param {string[]} countries
 */
export const getDropdown = countries => {
	// your code
	let result = "";
	result += `<option value ="">Please select</option>\n`
	countries.forEach(function(elem){
		let value = elem.toLowerCase()
		result += `<option value ="${value}">${elem}</option>\n`
	});
	return result.slice(0,-1)
	
};