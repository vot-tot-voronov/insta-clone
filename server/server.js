require('dotenv').config()
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());


const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

start();