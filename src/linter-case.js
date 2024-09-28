import { Stack } from "./classes/stack.js";
/* 
  Here we are using an implementation of an Stack an abstract data structure 
  to make a function that lints a line of code or string 
  checking for correct braces use 
*/

function lintCode(str) {
  const stack = new Stack();

  for(const i of str) {
    if (isOpeningChar(i)) { stack.push(i) } 
    
    if (isClosingChar(i)) { 
      let popOpeningBrace = stack.pop()

      if (!popOpeningBrace) {
        return `${i} doesn't have opening brace`;
      }

      if (isNotAMatch(popOpeningBrace, i)) {
        return `${i} doesn't correspond with ${popOpeningBrace}`
      }
    }
  }

  if (stack.peek()) {
    return `${stack.peek()} not have a closing brace`
  }
  return true;
}


function isOpeningChar(char) {
  return ['[', '{', '('].includes(char)
}
function isClosingChar(char) {
  return [']', '}', ')'].includes(char)
}

function isNotAMatch(opening, closure) {
  const combinations = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  
  return combinations[opening] !== closure;
}

console.log(lintCode('const o = ('));