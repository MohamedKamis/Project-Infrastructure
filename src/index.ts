import express from 'express';
import * as twilio from 'twilio';
import dotenv from 'dotenv';
const app = express();

app.use(express.json());
dotenv.config();

const port = process.env.port || 8000;
const accountSid =process.env.accountSid as string;
const authToken = process.env.authToken as string;
     const client = twilio(accountSid, authToken);

const messageOptions: twilio.RestApiMessages.CreateMessageOptions = {
  body: 'Hello from Node.js!',
  from: 'whatsapp:+201558554755',
  to: 'whatsapp:+201140110913'
};

client.messages
  .create(messageOptions)
  .then((message: twilio.RestApiMessages.MessageResource) => console.log(message.sid))
  .catch((error: Error) => console.log(error));
app.get('/', async (_req, res) => {
   
  res.send(process.env.authToken);
});

app.listen(port, () => {
  console.log(`Your server starting on --> http://localhost:${port}?id=`);
});
/*for start (npm run dev)*/
export default app;
