function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if (arr.length == 0)
  	return '';

  var min = 10000;
  var index = -1;
  for (var i = 0; i < arr.length; i++) {
	if (typeof arr[i] === 'number') {
		if ( arr[i] < min) {
			min = arr[i];
			index = i;
		}
	} 	
  }  
  if (index == -1)
  	return '';
  return arr[index];
}
module.exports = findSmallestNumberAmongMixedElements;
 