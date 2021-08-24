import 'chai/register-expect';
import { getFibonacciUntil } from '../fibonacci';

describe('getFibonacciUntil() function', () => {
  it('should return the fibonacci numbers unil n in an array', function () {

    const result = getFibonacciUntil(7).toString();
    const expected = '0,1,1,2,3,5,8';

    const retArr = [0, 1] // since the sequence(or the array) starts with 0 and 1
    const getFibonacciUntil = (n) => {

      //add the last 2 numbers
      const valToInsert = retArr[retArr.length - 1] + retArr[retArr.length - 2]

      //add the calculated number to sequence if the length of sequence is less than n
      if (retArr.length < n) {
        retArr.push(valToInsert);
        getFibonacciUntil(n);
      }
      else
        return retArr // length is greater and the desired sequence is aquired

    }

    expect(result).to.equal(expected);
  });
});
