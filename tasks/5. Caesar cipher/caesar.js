export function encryptCaesar(inputString, key) {

  inputString = inputString.toUpperCase(); // to make sure there are no lower case characters

  // return if Key is 0, no need to encrypt
  if (key == 0) return inputString;

  let len = 0,
    retStrArr = [];

    // run loop for the lenth of the entire string
    while (len < inputString.length) {
      const charCode = inputString.charCodeAt(len); //get Char code
      let enCharCode = charCode + key; // get crypted Char code 

      //Character wrap to encode Z(90) from A(65) for encryption
      if (enCharCode > 90) {
        enCharCode = (enCharCode) % 90 + 64;
      };

      //Character wrap to encode A(65) from Z(90) for decryption
      if (enCharCode < 65) {
        enCharCode = (enCharCode) % 64 + 90;
      };

      retStrArr.push(String.fromCharCode(enCharCode));

      len++;

    }



  return retStrArr.join(""); // join all elements in array and return a string
}

/*
BONUS Questions answer

1 > encryptCaesar function can be used to decrypt by using negative key

2 > 
A> The letter in the encrypted word can be shifted 25 time to see if the letters in the sentense form any meaningful word. (example can be found at https://inventwithpython.com/hacking/chapter7.html under the title "Sample Run of the Caesar Cipher Hacker Program") 

b> There is a frequency of how frequently a letter may appear in a sentence written in english language (graph can be found at http://practicalcryptography.com/ciphers/caesar-cipher/). The repeatation is also applied to commonly used single letter word such as "a" in a sentence or 2 letter words such as "an" or 3 letter words such as "the, and, for". If such words are repeated, we can try to use these to decode the message

*/