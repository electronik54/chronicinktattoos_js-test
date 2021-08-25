export function getFibonacciUntil(n, retArr = [0, 1]) {
  //TODO write your code here, remember it should be recursive
  //add the last 2 numbers
  const valToInsert = retArr[retArr.length - 1] + retArr[retArr.length - 2]

  //add the calculated number to sequence if the length of sequence is less than n
  if (retArr.length < n) {
    retArr.push(valToInsert);
    getFibonacciUntil(n, retArr); // recurssion
    return retArr // desired sequence is acquired  
  }

  return;

}
