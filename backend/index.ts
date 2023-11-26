import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Read
app.get('/', (req: Request, res: Response) => {
  res.send('blub');
});

// Create
app.post('/', (req: Request, res: Response) => {
  res.json({cities: true});
});

// Update
// app.put('/', (req: Request, res: Response) => {
//   res.send('Hello PUT');
// });

// Delete
// app.delete('/', (req: Request, res: Response) => {
//   res.send('Hello DELETE');
// });

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});