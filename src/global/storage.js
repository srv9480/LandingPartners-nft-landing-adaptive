export const COOKIES_LANGUAGE = 'CookiesPolicy';

let Instance = null;

export default class {

    /**
     * For single ton
     */
    static getInstance() {
        if(Instance == null) {
            Instance = new this;
        }
        return Instance;
    }

    /**
     * SET local storage
     *
     * @param name
     * @param value
     */
    set (name, value) {
        localStorage.setItem(name, value);
    }

    /**
     * et item from local storage
     * @param key
     * @returns {string|null}
     */
    get (key) {
        return localStorage.getItem(key)
    }

    /**
     * Remove item from local storage
     *
     * @param {string} key
     */
    delete(key) {
        localStorage.removeItem(key);
    }
    get COOKIES_LANGUAGE() {
        return COOKIES_LANGUAGE;
    }
}