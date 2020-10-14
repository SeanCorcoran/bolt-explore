'use strict';

const { App } = require('@slack/bolt');
const { sayHello, helloButton } = require("./handlers/hello");

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// Commands go here

// Listens to incoming messages that contain "hello"
app.message('hello', async ({ message, say }) => sayHello({ message, say }, 'hello_button'));
// Responds to the button when clicked
app.action('hello_button', async ({ body, ack, say }) => helloButton({ body, ack, say}));



(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();

