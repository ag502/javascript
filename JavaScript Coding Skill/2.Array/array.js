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
