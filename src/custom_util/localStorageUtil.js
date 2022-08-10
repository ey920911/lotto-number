const storageAvailable = (() => {
  try {
    const x = '__localStorage_test__';
    localStorage.setItem(x, x);
    localStorage.removeItem(x);
    return true;
  } catch (e) {
    console.error(e);
    console.warn(
      'Local storage is not available. Related functions have been disabled.'
    );
    return false;
  }
})();

function get(key) {
  if (!storageAvailable) {
    console.warn('Local storage is not available');
    return null;
  }
  const value = localStorage.getItem(key);

  return JSON.parse(value);
}

function set(key, value) {
  if (!storageAvailable) {
    console.warn('Local storage is not available');
    return null;
  }
  const toJson = JSON.stringify(value);

  console.log('toJson', toJson);
  localStorage.setItem(key, toJson);
  return null;
}

function remove(key) {
  if (!storageAvailable) {
    console.warn('Local storage is not available');
    return null;
  }

  localStorage.removeItem(key);
  return null;
}

export default { get, set, remove };
