require('dotenv').config();
const express = require('express');
const router = require('express').Router();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.use(express.static('client/dist'));
app.use(router);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})