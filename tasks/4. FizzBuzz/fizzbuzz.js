export function getFizzBuzzUntil(n) {
  let retArr = [], count = 1;

  //run loop till the count is 0
  while (count <= n) {

    // if mod 3 is 0 then the number is a multiple of 3, same for mod 5
    if (count % 3 == 0 && count % 5 == 0)
      retArr.push("FizzBuzz")
    else if (count % 3 == 0 )
      retArr.push("Fizz")
    else if (count % 5 == 0)
      retArr.push("Buzz")
    else
      retArr.push(count)  // nethier a mod of 3 or 5
    
    count += 1; //reduce the count for next number
  }

  // return the array as starting from 1st entry
  return retArr;

}
