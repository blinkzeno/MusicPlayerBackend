const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database.js');
const cors = require('cors');
dotenv.config();


const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', require('./routes/UserRoute'));

app.use('/api/musics', require('./routes/MusicRoute'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});