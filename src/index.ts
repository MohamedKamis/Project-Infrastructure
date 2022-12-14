import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', async (_req, res) => {
  res.send('Welcome to the Project-Infrastructure Api .');
});

app.listen(port, () => {
  console.log(`Your server starting on --> http://localhost:${port}?id=`);
});
/*for start (npm run dev)*/
export default app;
