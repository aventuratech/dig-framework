import Hash from "object-hash";

const defaultLifespan = 60 * 5 * 1000; // 5 minutes

const get = key => {
  if (!validateStorage()) return false;

  const cached = localStorage.getItem(key);
  if (cached) {
    const cachedData = JSON.parse(cached);
    if (cachedData.expires < Date.now()) {
      // this is expired, delete it
      localStorage.removeItem(key);
    } else {
      return cachedData.data;
    }
  }

  return false;
};

const set = (key, data, expires) => {
  if (!validateStorage()) return false;

  const lifespan = expires ? expires : defaultLifespan;
  const now = Date.now();

  const cacheRecord = {
    expires: now + lifespan,
    data: data
  };
  localStorage.setItem(key, JSON.stringify(cacheRecord));
};

const generateKey = object => {
  return "dig-client-cache-" + Hash(object);
};

const validateStorage = () => {
  var test = "test";
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

export default {
  get,
  set,
  generateKey: generateKey
};
