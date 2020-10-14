'use strict';

async function sayHello({ message, say }, buttonID) {
  // Basic Hello
  // await say(`Hey there <@${message.user}>!`); 

  // Fancy Hello
  await say({
    blocks: [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `Hey there <@${message.user}>!`
        },
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Click Me"
          },
          "action_id": `${buttonID}`
        }
      }
    ],
    text: `Hey there <@${message.user}>!`
  });
}

async function helloButton({body, ack, say}) {
  // Acknowledge the action
  await ack();
  await say(`<@${body.user.id}> clicked the button`);
}

module.exports = {
  sayHello,
  helloButton
}