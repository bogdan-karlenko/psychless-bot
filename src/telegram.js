const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/json';

const { getTime } = require('./utils');

const sendMessage = (text) => {
        console.log(`${getTime()}: Sending Telegram message!`);
        return axios.post(
        `https://api.telegram.org/bot${process.env.TELEGRAM_API_TOKEN}/sendMessage`,
        {
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: text.toString()
        });
    }

module.exports = { sendMessage };
