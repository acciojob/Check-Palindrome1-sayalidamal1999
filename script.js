// complete the given function

function palindrome(str){
	// Convert the input string to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Loop through the string and compare characters from both ends
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;

}
module.exports = palindrome
