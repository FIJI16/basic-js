import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(/* members */) {
  let arr__members = [];
  let str__members = "";

  if( Array.isArray(members) != true ) {
      return false;
  }

  for( let i = 0; i < members.length; i++ ) {

    if( typeof members[i] === "string" ) {

      arr__members = arr__members.concat( members[i].replace(/\s/g, "").slice( 0, 1 ).toUpperCase() ).sort();

    }

  }

  

  for( let j = 0; j < arr__members.length; j++ ) {

      str__members += arr__members[j];

  }

  return str__members;
}
