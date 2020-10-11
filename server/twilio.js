require('dotenv').config();
const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

const Twilio = express();

// twilio requirements --- after creating twilio account on twilio site
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const autheToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, autheToken);

Twilio.use(cors()); // restricts blockage

Twilio.get('/text', (req, res) => {
  // Variables passed via query string
  res.send('welcome to twilio');
  const { recipient, textmessage } = req.query;
  console.log(req.query);
  console.log(req.body);

  // send the text
  client.messages.create({
    body: textmessage,
    from: '+14809330219',
    to: `+1${recipient}`,
  })
    .then((message) => console.log(message.body))
    .catch((err) => console.log(err));
});
