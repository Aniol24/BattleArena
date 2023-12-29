// store.js
let userData = {
    token: null,
    username: 'null',
    image: null,
    xp: null,
    level: null,
    coins: null,
};

export const setUserToken = (token) => {
    userData.token = token;
};

export const setUserName = (username) => {
    userData.username = username;
};

export const setUserImage = (image) => {
    userData.image = image;
};

export const setUserXp = (xp) => {
    userData.xp = xp;
}

export const setUserLevel = (level) => {
    userData.level = level;
}

export const setUserCoins = (coins) => {
    userData.coins = coins;
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



