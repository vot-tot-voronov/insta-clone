require('dotenv').config()
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());


const start = async () => {
  try {
    app.listen(PORT, (req, res) => console.log(`Server is running on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

start()