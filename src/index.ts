import express from 'express';
import * as twilio from 'twilio';

const app = express();
const port = 8080;

app.use(express.json());

app.get('/', async (_req, res) => {

const accountSid = 'ACd3dda004c0771fac63823bd8899e71ea';
const authToken = '13847b05aea79467da4bae307d70417d';

  res.send(" hello world ...." );
});
app.listen(port, () => {
  console.log(`Your server starting on --> http://localhost:${port}?id=`);
});
/*for start (npm run dev)*/
export default app;
