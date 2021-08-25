export function Reduce(array, reducer, initialValue) {
  // TODO: write your code here
  
  return array.reduce((prevVal, currVal) => reducer(prevVal, currVal) , initialValue)

}
