const express = require('express')
require('dotenv').config();
const bodyParser = require('body-parser')
const db=require('./config/connection.js');
const authRouter = require('./routes/auths.js');
const cors = require('cors')
const searchRouter = require('./routes/SearchRoute.js')




db();

const api = process.env.API_URL;
//http://localhost:5050/api/shico
const PORT =  5050;
const app = express();
app.use(cors());

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(`${api}/user`,authRouter)
app.use(`${api}/product`,searchRouter)


// start the Express server
app.listen(PORT, () => {
  console.log(api)
  console.log(`Server listening on port localhost "http://localhost:${PORT}"`);
});