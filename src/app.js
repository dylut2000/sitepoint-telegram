require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN;

// Created instance of TelegramBot
const bot = new TelegramBot(token, {
    polling: true
});

// Listener (handler) for telegram's /bookmark event
bot.onText(/\/bookmark/, (msg, match) => {
    const chatId = msg.chat.id;
    const url = match.input.split(' ')[1];
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
 
    if (url === undefined) {
        bot.sendMessage(
            chatId,
            'Please provide URL of article!',
        );
        return;
    }
 
    URLs.push(url);
    bot.sendMessage(
        chatId,
        'URL has been successfully saved!',
    );
});