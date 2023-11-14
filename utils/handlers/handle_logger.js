require("dotenv").config()
const slackWebhook = require('@slack/webhook');

const webhook= new slackWebhook.IncomingWebhook(process.env.SLACK_WEBHOOK_URL)

const loggerStream = {  // para que me escriba en el logger
    write: (message) => {
         webhook.send({    // para que me envie el mensaje
             text: message
         })
        console.log('log',message)
    }
}

module.exports = loggerStream