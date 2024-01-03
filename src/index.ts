import express from 'express';
import * as twilio from 'twilio';
import dotenv from 'dotenv';
const app = express();

app.use(express.json());
dotenv.config();

const port = process.env.port || 8000;

app.get('/', async (_req, res) => {
   
  res.send('${process.env.authToken}');
});

app.listen(port, () => {
  console.log(`Your server starting on --> http://localhost:${port}?id=`);
});
/*for start (npm run dev)*/
export default app;
