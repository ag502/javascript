const game1 = {
  player: "Jim Jonas",
  hits: 2,
  runs: 1,
  errors: 0
};

const game2 = {
  player: "Jim Jonas",
  hits: 3,
  runs: 0,
  errors: 1
};

const total = {};
const stats = Object.keys(game1);

for (let i = 0; i < stats.length; i++) {
  const stat = stats[i];
  if (stat !== "player") {
    total[stat] = game1[stat] + game2[stat];
  }
}

console.log(total);

const staff = [
  { name: "Wesley", position: "musician" },
  { name: "Davis", position: "engineer" }
];

function getMusicians(staff) {
  return staff.filter(member => member.position === "musician");
}

console.log(getMusicians(staff));

/**
 * Includes()
 */

const sections = ["Shipping"];

function displayShipping(sections) {
  if (sections.indexOf("Shipping")) {
    return true;
  }
  return false;
}

function displayShipping2(sections) {
  return sections.indexOf("Shipping") > -1;
}

function displayShippingIncludes(sections) {
  return sections.includes("Shipping");
}

console.log(displayShipping(sections));
console.log(displayShipping2(sections));
console.log(displayShippingIncludes(sections));

/**
 * Spread Syntax
 */
const array = [1, 2, 3, 4, 5];

function removeItem(items, removable) {
  const updated = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i] !== removable) {
      updated.push(items[i]);
    }
  }
  return updated;
}

// console.log(removeItem(array, 5));

function removeItemsSplice(items, removable) {
  const index = items.indexOf(removable);
  items.splice(index, 1);
  return items;
}

// console.log(removeItemsSplice(array, 5));
// console.log(array);

function removeItemSlice(items, removable) {
  const index = items.indexOf(removable);
  return items.slice(0, index).concat(items.slice(index + 1));
}

// console.log(removeItemSlice(array, 5));
// console.log(array);

function removeItemsSpread(items, removable) {
  const index = items.indexOf(removable);
  return [...items.slice(0, index), ...items.slice(index + 1)];
}

console.log(removeItemsSpread(array, 5));
console.log(array);
