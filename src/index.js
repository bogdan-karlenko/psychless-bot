const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const { getGodvilleData, verifyGodvilleQuest } = require('./godville');
const { sendMessage } = require('./telegram');

process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message);
    sendMessage(error.message);
});

const checkData = async () => {
    console.log('\n');
    const data = await getGodvilleData();
    const result = verifyGodvilleQuest(data);
    result &&
        await sendMessage(
            'Герой пытается уйти из гильдии! Задание:',
            data.data.quest
        );
};

const app = express();

app.get('/', (request, response) => {
    return response.send('OK');
});
app.listen(3000, () => {
    console.log('App is listening on port 5000');
    checkData();
    setInterval(() => {
        checkData();
    }, 3600000);
});
