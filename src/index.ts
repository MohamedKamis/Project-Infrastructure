import express from 'express';
import * as twilio from 'twilio';

const app = express();
const port = 8080;

app.use(express.json());

app.get('/', async (_req, res) => {

const accountSid = 'ACd3dda004c0771fac63823bd8899e71ea';
const authToken = '13847b05aea79467da4bae307d70417d';
     const client = twilio(accountSid, authToken);

const messageOptions: twilio.messages.CreateMessageOptions = {
  body: 'Hello from Node.js!',
  from: 'whatsapp:+201558554755', // This is your Twilio sandbox number
  to: 'whatsapp:+201140110913' // This is the recipient's number
};

client.messages
  .create(messageOptions)
  .then((message: twilio.messages.MessageInstance) => console.log(message.sid))
  .catch((error: Error) => console.log(error));

  res.send(" hello world ...." );
});
app.listen(port, () => {
  console.log(`Your server starting on --> http://localhost:${port}?id=`);
});
/*for start (npm run dev)*/
export default app;
