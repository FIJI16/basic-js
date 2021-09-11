import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit( n ) {
  let massive = [];
  let true__massive = [];
  let fake__massive = [];
  let string__num = String(n);
  let string__result = "";
  let search__num = "";
  
  for( let i = 0; i < string__num.length; i++) {
      massive.push( string__num[i] );
  }

  fake__massive = true__massive.concat(massive);

  fake__massive = fake__massive.sort().reverse();
  search__num = fake__massive[fake__massive.length - 1];

  for(let k = 0; k < massive.length; k++) {

      if(massive[k] == search__num) {
          massive.splice(k, 1);
          break;
      }

  }

  for(let j = 0; j < massive.length; j++) {

      string__result += massive[j];
  }

  return Number(string__result);
}
