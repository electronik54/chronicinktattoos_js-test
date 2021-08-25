export function isPalindrome(inputString) {
  
  return inputString === inputString.split('').reverse().join('');

}