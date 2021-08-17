const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;

app.use(express.static("build"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const router = require('./routes.js');
router(app);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));




