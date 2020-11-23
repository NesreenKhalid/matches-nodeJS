const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
const matchRoutes = require('./routes/matchRoutes');

const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://127.0.0.1:27017/matches', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


app.listen(PORT, () => {
  console.log(`server running on port : ${PORT}`);
});

app.use('/matches', matchRoutes);
