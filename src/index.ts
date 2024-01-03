import express from 'express';

const app = express();
const port = 8080;

app.use(express.json());

app.get('/', async (_req, res) => {
  res.send("
const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'Hello from Node.js!',
    from: 'whatsapp:+14155238886', // This is your Twilio sandbox number
    to: 'whatsapp:+1234567890' // This is the recipient's number
  })
  .then(message => console.log(message.sid))
  .catch(error => console.log(error));
");
});
app.listen(port, () => {
  console.log(`Your server starting on --> http://localhost:${port}?id=`);
});
/*for start (npm run dev)*/
export default app;
