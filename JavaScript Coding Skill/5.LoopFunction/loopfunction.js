/**
 * Arrow Function
 */

function capitalize(name) {
  return name[0].toUpperCase() + name.slice(1);
}

const capitalizeAnony = function(name) {
  return name[0].toUpperCase() + name.slice(1);
};

const capitalizeArrow = name => {
  return name[0].toUpperCase() + name.slice(1);
};

function formatUser(name) {
  return `${capitalize(name)}님이 로그인 했습니다.`;
}

const formatUserArrow = name => `${capitalize(name)}님이 로그인 했습니다.`;

function applyCutomerGreeting(name, callback) {
  return callback(capitalize(name));
}

applyCutomerGreeting("mark", function(name) {
  return `안녕 ${name}!`;
});

applyCutomerGreeting("mark", name => `안녕 ${name}`);

/**
 * Arrow Function Loop
 */

const band = [
  {
    name: "corbett",
    instrument: "guitar"
  },
  {
    name: "evan",
    instrument: "guitar"
  },
  {
    name: "sean",
    instrument: "bass"
  },
  {
    name: "brett",
    instrument: "drums"
  }
];

const instrument = band.map(member => member.instrument);

console.log(instrument);
