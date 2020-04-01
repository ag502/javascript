const fetch = require("node-fetch");
/**
 * asynchronous
 */

function getUserPreference(cb) {
  return setTimeout(() => {
    cb({
      theme: "dusk"
    });
  }, 1000);
}

function log(value) {
  console.log(value);
}

log("Starting");
getUserPreference(preferences => {
  return log(preferences.theme.toUpperCase());
});
log("ending?");

/**
 * Promise
 */

function getUserPreferences() {
  const preferences = new Promise((resolve, reject) => {
    resolve({
      theme: "dusk"
    });
    reject({
      type: "거부됨"
    });
  });
  return preferences;
}

function getMusic(theme) {
  if (theme === "dusk") {
    return Promise.resolve({
      album: "music for airports"
    });
  }
  return Promise.resolve({
    album: "kind of blue"
  });
}

getUserPreferences()
  .then(preferencs => getMusic(preferencs))
  .then(album => console.log(album.album));

function failUserPerference() {
  const finder = new Promise((resolve, reject) => {
    reject({
      type: "접근 거부됨"
    });
  });
  return finder;
}

failUserPerference()
  .then(preferences => console.log(preferences))
  .catch(error => console.log(error.type));

/**
 * async /await
 */

function getUserPreferencesAsync() {
  return Promise.resolve({ theme: "dusks" });
}

async function getTheme() {
  const { theme } = await getUserPreferencesAsync();
  return theme;
}

getTheme().then(res => console.log(res));

/**
 * fetch
 */

fetch("http://jsonplaceholder.typicode.com/posts/1")
  .then(res => {
    if (res.status === 404) {
      throw Error(res.status);
    }
    return res.json();
  })
  .then(post => console.log(post));

const update = {
  title: "Clarence White Techniques",
  body: "Amazing",
  userId: 1
};

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(update)
};

fetch("http://jsonplaceholder.typicode.com/posts", options)
  .then(res => {
    if (res.status === 404) {
      throw Error(res.status);
    }
    return res.json();
  })
  .then(res => console.log(res));

const tempMap = new Map()
  .set("a", "a")
  .set("b", "b")
  .set("c", "c");

console.log(tempMap);
console.log([...tempMap]);
console.log(JSON.stringify([...tempMap]));
