import { LOCAL_STORAGE_TOKEN_KEY } from './../../const/localstorage';
const storagePrefix = 'spotify_clone_';

const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}${LOCAL_STORAGE_TOKEN_KEY}`) as string);
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}${LOCAL_STORAGE_TOKEN_KEY}`, JSON.stringify(token));
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}${LOCAL_STORAGE_TOKEN_KEY}`);
  },
};

export default storage;
