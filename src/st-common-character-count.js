import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount( s1, s2 ) {
  let str__low;
  let str__high;
  let result = 0;

  if( s1.length == 0 || s2.length == 0 ) {
      return 0;
  }

  if( s1.length > s2.length ) {
      str__low = s2;
      str__high = s1;
  } else {
      str__low = s1;
      str__high = s2;
  }
  
  Label: for( let i = 0; i < str__low.length; i++ ) {

      for( let j = 0; j < str__high.length; j++ ) {

          if( str__low[i] == str__high[j] ) {
              str__high = str__high.replace( str__high[j], " " );
              result++;
              continue Label;
          }

      }

  }
  
  return result;
}
