import express from 'express';
import dotenv from 'dotenv';

import productRoute from '../routes/productRout.js';
import signInRout from '../routes/signInRout.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.use(productRoute);

app.use((req, res, next) => res.status(404).send('Page Not Exist'));

app.listen(3000, () => console.log('Server is running on Port 3000'));
