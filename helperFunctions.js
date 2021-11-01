function isPalidrome(str) {
  // convert the string to lowercase so  that every letter is lowercase
  str = str.toLowerCase();

  //   create 2 pointers, one starting from the beginning and one starting from the end
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    //   check and skip current left element if it is a space
    if (str[left] === " ") {
      left++;
    }
    // check and skip current right element if it is a space
    if (str[right] === " ") {
      right--;
    }
    // compare the two elements, and return false if they do not match, otherwise continue checking the next pair
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  //   return true if we are done checking our loop and no statement returned false
  return true;
}

// --------------ANAGRAM--------------------//
function isAnagram(str1, str2) {
  // Check if the lengths match, return false if they dont
  if (str1.length !== str2.length) return false;
  //   convert coth strings to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  //   check the letters of str1 against those of str2, delete from str2 those that match
  // with letters of str1. Eventually, str2 is going to be empty if all letters go a matching partner from str1
  for (let letter of str1) {
    if (str2.includes(letter)) {
      str2 = str2.replace(letter, "");
    }
  }

  return str2 ? false : true;
}

module.exports = { isPalidrome, isAnagram };
