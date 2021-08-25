export function isPalindrome(inputString) {
  
  // convert the string to array hjolding each element > reverse the order and join the array back into a string. return the compared value
  return inputString === inputString.split('').reverse().join('');

}