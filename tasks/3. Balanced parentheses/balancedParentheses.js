export function areParenthesesBalanced(inputString) {
  // TODO: write your code here
  let len = inputString.length // get length of the string
    , count = 0;

  // run loop for the lenth of the entire string
  while (len--) {
    if (inputString.charAt(len) === "(") count--
    else if (inputString.charAt(len) === ")") count++

    // negative count indicates more ) than ( ensuring there are >= opening brackets than closing
    if (count < 0) return false
  }
  if (count == 0) return true; // if the brackets are balanced
  return false; // if the brackets are ! balanced
}

