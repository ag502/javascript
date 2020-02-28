/**
 * 1-1
 */

// Problem
function addClick(items) {
  for (var i = 0; i < items.length; i++) {
    items[i].onClick = function() {
      return i;
    };
  }
  return items;
}

const example = [{}, {}];
const clickSet = addClick(example);
console.log(clickSet[0].onClick());

// Solve with Closure, IIFE

function addClick_2(items) {
  for (var i = 0; i < items.length; i++) {
    items[i].onClick = (function(i) {
      return function() {
        return i;
      };
    })(i);
  }
  return items;
}

const example_2 = [{}, {}];
const clickSet_2 = addClick_2(example_2);
console.log(clickSet_2[0].onClick());

// Solve with ES6

function addClick_3(items) {
  for (let i = 0; i < items.length; i++) {
    items[i].onClick = function() {
      return i;
    };
  }
  return items;
}

const example_3 = [{}, {}];
const clickSet_3 = addClick_3(example_3);
console.log(clickSet_3[0].onClick());

/**
 * 1-2
 */

function yell(name) {
  return `HI, ${name.toUpperCase()}`;
}

console.log(yell("Lee"));
