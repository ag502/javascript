/**
 * Object.assign()
 */

const defaults = {
  author: "",
  title: "",
  year: 2007,
  rating: null
};

const book = {
  author: "Joe Morgan",
  title: "Simplifying JavaScript"
};

const addBookDefaults = function(book, dafaults) {
  const fields = Object.keys(defaults);
  const updated = {};
  fields.forEach((cur, idx) => {
    updated[cur] = book[cur] || defaults[cur];
  });
  return updated;
};

console.log(addBookDefaults(book, defaults));

const updated = Object.assign({}, defaults, book);
console.log(updated);

const defaultEmployee = {
  name: {
    first: "Lee",
    last: ""
  },
  years: 0
};

const employee = Object.assign({}, defaultEmployee);
console.log(employee);

defaultEmployee.name.first = "kim";
defaultEmployee.year = 20;

console.log(defaultEmployee, employee);

const deepEmployee = Object.assign({}, defaultEmployee, {
  name: Object.assign({}, defaultEmployee.name)
});

defaultEmployee.name.first = "Lee";

console.log(defaultEmployee, deepEmployee);

/**
 * Object Spread Syntax
 */

const DeepSpreadEmployee = {
  ...defaultEmployee,
  name: { ...defaultEmployee.name }
};

console.log(DeepSpreadEmployee);

/**
 * Map
 */

// let filters = new Map();
// filters
//   .set("견종", "레브라도레트리버")
//   .set("크기", "대형견")
//   .set("색상", "갈색");

// console.log(filters);
// console.log(filters.get("크기"));

// filters = {};

// function addFilters(filters, key, value) {
//   filters[key] = value;
// }

// function deleteFilters(filters, key) {
//   delete filters[key];
// }

// function clearFilters() {
//   return {};
// }

// addFilters(filters, "name", "Lee");
// console.log(filters);
// filters = clearFilters();
// console.log(filters);

// const petFilters = new Map();

// function addFilterMap(filters, key, value) {
//   filters.set(key, value);
// }

// function deleteFilter(filters, key) {
//   filters.delete(key);
// }

// function clearFilters(filters) {
//   filters.clear();
// }

/**
 * Map Circuit
 */

const filters_2 = {
  색상: "검정색",
  견종: "레브라도레트리버"
};

function getAppliedFilters(filters) {
  const keys = Object.keys(filters);
  const appiled = [];
  for (const key of keys) {
    appiled.push(`${key}:${filters[key]}`);
  }
  return `선택한 조건은 ${appiled.join(", ")} 입니다.`;
}

console.log(getAppliedFilters(filters_2));

const filters_3 = new Map()
  .set("색상", "검정색")
  .set("견종", "래브라도레트리버");

function checkFilter(filters) {
  for (const entry of filters) {
    console.log(entry);
  }
}

checkFilter(filters_3);

function getAppliedFiltersMap(filters) {
  const appiled = [];
  for (const [key, value] of filters) {
    appiled.push(`${key}:${value}`);
  }
  return `선택한 조건은 ${appiled.join(", ")} 입니다.`;
}

console.log(getAppliedFiltersMap(filters_3));

function sortByKey(a, b) {
  return a[0] > b[0] ? 1 : -1;
}

function getAppliedFiltersMapSorted(filters) {
  const appiled = [];
  for (const [key, value] of [...filters].sort(sortByKey)) {
    appiled.push(`${key}:${value}`);
  }
  return `선택한 조건은 ${appiled.join(", ")} 입니다.`;
}

console.log(getAppliedFiltersMapSorted(filters_3));
