/**
 * первое задание
 * @type {RegExp}
 */
let sbh = /'/g;
let text = "ksegs's's 's's''s'df 'se'f' dsf'e f'f's' df";

console.log( text.replace(sbh, '"'));

/**
 * второе задание
 */

let shb2 = /\w+'[^'t]/g;
let text2 = "snfsn' 'ff  sf' sf s'' s'd ' d'ddd'd's 'as''s''t";

console.log(text2.replace(shb2, '"'));