const saveToLocalStorage = (key, value) => {
  if (localStorage.getItem(key) !== JSON.stringify(value)) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
export default saveToLocalStorage;
