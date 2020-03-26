/**
 * default argument
 */

function convertWeigth(weight, ounces) {
  const oz = ounces ? ounces / 16 : 0;
  const total = weight + oz;
  return total / 2.2;
}

console.log(convertWeigth(44, 11));

function convertWeigthDefault(weigth, ounces = 0, roundTo = 2) {
  const total = weigth + ounces / 16;
  const conversion = total / 2.2;
  // return roundToDecimalPlace(conversion, roundTo)
}

/**
 * Destructuring Assignment
 */

const landscape = {
  title: "Landscape",
  photographer: "Nathan",
  equipment: "Cannon",
  format: "digital",
  src: "/landscape-nm.jpg",
  location: [32.712222, -103.1405556],
  test: { a: "1", b: "2" }
};

const { photographer, title, ...rest } = landscape;
console.log(photographer, title, rest);

const { src: url } = landscape;
console.log(url);

// const { location } = landscape;
// const [latitude, longitude] = location;
const {
  location: [latitude, longitude]
} = landscape;

console.log(latitude, longitude);

const {
  test: { a, b }
} = landscape;

console.log(a, b);

function displayPhoto(photo) {
  const {
    title,
    photographer,
    location: [latitude2, longitude2],
    src: url,
    ...other
  } = landscape;
  //
}

function displayPhoto({
  title,
  photographer,
  location: [latitude3, longitude3],
  src: url,
  ...other
}) {
  //
}

/**
 * Making Object
 */

const region = {
  city: "Hobbs",
  county: "Lea",
  state: {
    name: "New Maxico",
    abbreviate: "NM"
  }
};

function getCityAndState({ location }) {
  console.log(location);
  const { city, state } = region;
  return {
    city,
    state: state.abbreviate
  };
}

console.log(getCityAndState(landscape));

function getCityAndStateDetail({ location, ...detail }) {
  const {
    city,
    state: { abbreviate }
  } = region;
  return {
    city,
    state: abbreviate,
    ...detail
  };
}

console.log(getCityAndStateDetail(landscape));

/**
 * arguments
 */

function validateCharacterCount(max, items) {
  return items.every(item => item.length < max);
}

console.log(validateCharacterCount(10, ["Hobbs", "Eagles"]));

function getArgument() {
  return arguments;
}

console.log(getArgument("Bloomsday", "June 16"));

function validateCharacterCountArgs(max) {
  const items = Array.prototype.slice.call(arguments, 1);
  console.log(items);
}

const tags = ["Hobbs", "Eagles"];

validateCharacterCountArgs(10, "abcd", "ddd");
validateCharacterCountArgs(10, ...tags);

function getArguments(...args) {
  return args;
}

console.log(getArguments("Bloomsday", "June 16"));

function validateCharacterCountArgsItems(max, ...items) {
  return items.every(item => item.length < max);
}

["Sprited Away", "Princess Mononoke"].map((filter, ...other) => {
  console.log(other);
});
