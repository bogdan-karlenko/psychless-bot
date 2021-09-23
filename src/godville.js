const axios = require('axios');

const { getTime } = require('./utils');

const getGodvilleData = async () => {
    console.log(`${getTime()}: getting Godville data`);
    return await axios.get(`http://godville.net/gods/api/${process.env.GODVILLE_GOD_NAME}/${process.env.GODVILLE_API_KEY}`);
};

const verifyGodvilleQuest = (data) => {
    const quest = data.data.quest;
    const result = !!(quest.match(/членом гильдии/));
    console.log(`${getTime()}: verifying data. Result: ${result ? 'Not OK' : 'OK'}`);
    return result;
};

module.exports = { getGodvilleData, verifyGodvilleQuest };
