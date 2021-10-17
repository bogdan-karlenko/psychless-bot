require('dotenv').config();

const { getGodvilleData, verifyGodvilleQuest } = require('./godville');
const { sendMessage } = require('./telegram');

const checkData = async () => {
    const data = await getGodvilleData();
    const result = verifyGodvilleQuest(data);
    result &&
        await sendMessage(
            'Герой пытается уйти из гильдии! Задание:',
            data.data.quest
        );
};

checkData();
