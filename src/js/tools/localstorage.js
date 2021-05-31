export const localStorageGet = (name) => (JSON.parse(localStorage.getItem(name)))

export const localStorageSet = (name, value) => localStorage.setItem(name, JSON.stringify(value));