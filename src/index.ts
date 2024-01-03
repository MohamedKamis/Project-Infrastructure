import express from 'express';

const app = express();
const port = 8080;

app.use(express.json());

app.get('/', async (_req, res) => {

const accountSid = 'ACd3dda004c0771fac63823bd8899e71ea';
const authToken = '13847b05aea79467da4bae307d70417d';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'Hello from Node.js!',
    from: 'whatsapp:+201558554755', // This is your Twilio sandbox number
    to: 'whatsapp:+201140110913' // This is the recipient's number
  })
  .then(message => console.log(message.sid))
  .catch(error => console.log(error));
  res.send(" hello world ...." );
});
app.listen(port, () => {
  console.log(`Your server starting on --> http://localhost:${port}?id=`);
});
/*for start (npm run dev)*/
export default app;
