// store.js
let userData = {
    token: null,
    username: 'null',
    image: null,
    xp: null,
    level: null,
    coins: null,
    games_won: null,
    games_lost: null,
};

const USER_DATA_KEY = 'userData';

const loadUserData = () => {
    const storedData = localStorage.getItem(USER_DATA_KEY);
    if (storedData) {
        userData = JSON.parse(storedData);
    }
};

const saveUserData = () => {
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
};

loadUserData();

export const setUserToken = (token) => {
    userData.token = token;
    saveUserData();
};

export const setUserName = (username) => {
    userData.username = username;
    saveUserData();
};

export const setUserImage = (image) => {
    userData.image = image;
    saveUserData();
};

export const setUserXp = (xp) => {
    userData.xp = xp;
    saveUserData();
}

export const setUserLevel = (level) => {
    userData.level = level;
    saveUserData();
}

export const setUserCoins = (coins) => {
    userData.coins = coins;
    saveUserData();
}

export const setUserGamesWon = (games_won) => {
    userData.games_won = games_won;
    saveUserData();
}

export const setUserGamesLost = (games_lost) => {
    userData.games_lost = games_lost;
    saveUserData();
}

export const getUserToken = () => {
    return userData.token;
};

export const getUserName = () => {
    return userData.username;
}

export const getUserData = () => {
    return userData;
};
