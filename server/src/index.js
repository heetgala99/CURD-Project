
// express method from express
const express = require('express');
const app = express();

// to get rid of the cross-origin-resource-sharing (Acess-Control-Allow-Origin)
const cors = require('cors');

// for the mongo-db connect
const mongoose = require('mongoose');

// import the clientModel object
const clientModel = require('./../Models/clientDataModel.js')

const AC = require('./Constants/AppConstants.js');
// import the necesarry variables from the AppConstants file
const {
  LIMIT,
  PASSWORD,
  DB_NAME,
  USERNAME,
  CLIENT_OBJECT
} = AC;

// to parse the body data / the payload given to the request API body
// the body data should be in json format to parse
app.use(express.json());

// // cors - cross origin error - middleware
app.use(cors());

// connect the mongodb
mongoose.connect(
  `mongodb+srv://${ USERNAME }:${ PASSWORD }@crud.yntm2.mongodb.net/${ DB_NAME }?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true
  }
);

app.get('/', async (req, res) => {
  res.send('I am Here');
});

// get API listner - to get all the data from the db
app.get('/read', async (req, res) => {
  clientModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  })
});

// post API listner
app.post('/create', async (req, res) => {

  const {
    userName,
    userEmailAddress,
    userAge,
    userPhoneNumber,
    userCompany
  } = req.body;

  const obj = {
    name: userName,
    emailAddress: userEmailAddress,
    age: userAge,
    phoneNumber: userPhoneNumber,
    company: userCompany
  }

  const client = new clientModel(obj);
  try{
    await client.save();
    res.send(client);
  } catch (err) {
    console.log(err);
  }

});

//localhost port
const port = 5000;
app.listen(port, () => {
  console.log(`Express Server is listening at http://localhost:${port}`)
});