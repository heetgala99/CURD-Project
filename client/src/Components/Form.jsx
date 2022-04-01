import React, { useState } from "react";
import Axios from 'axios';
import './../Styles/Form.css';
import {
  Button,
  TextField
} from '@material-ui/core';

const UserInputForm = () => {
  const [userName, setUserName] = useState('');
  const [userEmailAddress, setUserEmailAddress] = useState('');
  const [userAge, setUserAge] = useState(0);
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [userCompany, setUserCompany] = useState('');

  const addClientData = () => {
    console.log('submit');
    Axios.post("http:///localhost:5000/create",{
      userName: userName,
      userEmailAddress: userEmailAddress,
      userAge: userAge,
      userPhoneNumber: userPhoneNumber,
      userCompany: userCompany
    });
  };

  return(
    <div className="CreateNewUser">
      <div className="NewUserTitle">
        <div>
          New Client Registry Form
        </div>
      </div>
      <div>
        <TextField
          id="demo-helper-text-aligned"
          label="Client Name"
          helperText="Required*"
          value={ userName }
          onChange={ (e) => setUserName(e.target.value) }
        />
      </div>
      <div>
        <TextField
          id="demo-helper-text-aligned"
          label="Client EmailAddress"
          helperText="Required*"
          value={ userEmailAddress }
          onChange={ (e) => setUserEmailAddress(e.target.value) }
        />
      </div>
      <div>
        <TextField
          id="demo-helper-text-aligned"
          helperText="Required*"
          label="Client PhoneNumber"
          value={ userPhoneNumber }
          onChange={ (e) => setUserPhoneNumber(e.target.value) }
        />
      </div>
      <div>
        <TextField
          id="outlined-name"
          label="Client Age"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          value={ userAge }
          onChange={ (e) => setUserAge(e.target.value) }
        />
      </div>
      <div>
        <TextField
          id="demo-helper-text-aligned"
          label="Client Company"
          helperText=""
          value={ userCompany }
          onChange={ (e) => setUserCompany(e.target.value) }
        />
      </div>
      <div>
        <Button
          variant='contained'
          color='primary'
          href='/'
          type="ubmit"
          onClick={ addClientData }
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default UserInputForm;