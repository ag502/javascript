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

const defaults_3 = new Map()
  .set("색상", "갈색")
  .set("견종", "비글")
  .set("지역", "캔자스");

const filters_4 = new Map().set("색상", "검정색");

function applyDefaults(map, defaults) {
  [...defaults].forEach(([key, value]) => {
    if (!map.has(key)) {
      map.set(key, value);
    }
  });
}

// console.log(filters_4);
// applyDefaults(filters_4, defaults_3);
// console.log(filters_4);

function applyDefalutsCopy(map, defaults) {
  const copy = new Map([...map]);
  [...defaults].forEach(([key, value]) => {
    if (!copy.has(key)) {
      copy.set(key, value);
    }
  });
  return copy;
}

console.log(filters_4);
console.log(applyDefalutsCopy(filters_4, defaults_3));
console.log(filters_4);

function applyDefaultsCopy2(map, defaults) {
  return new Map([...defaults, ...map]);
}

/**
 * Set
 */

const dogs = [
  {
    이름: "맥스",
    크기: "소형견",
    견종: "보스턴테리어",
    색상: "검정색"
  },
  {
    이름: "도니",
    크기: "대형견",
    견종: "래브라도레트리버",
    색상: "검정색"
  },
  {
    이름: "섀도",
    크기: "중형견",
    견종: "래브라도레트리버",
    색상: "갈색"
  }
];

function getColors(dogs) {
  return dogs.map(dog => dog["색상"]);
}

const dogColors = getColors(dogs);

function getUnique(attributes) {
  const unique = [];
  for (const attribute of attributes) {
    if (!unique.includes(attribute)) {
      unique.push(attribute);
    }
  }
  return unique;
}

function getUniqueReduce(dogs) {
  return dogs.reduce((acc, cur) => {
    if (!acc.includes(cur)) {
      return [...acc, cur];
    } else {
      return acc;
    }
  }, []);
}

console.log(getUnique(dogColors));
console.log(getUniqueReduce(dogColors));

const setColor = new Set(dogColors);
console.log(setColor);

function getUniqueSet(attributes) {
  return [...new Set(attributes)];
}
