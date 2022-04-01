import React, { useEffect, useState } from "react";
import Axios from 'axios';
import _ from 'lodash';
import './../Styles/Home.css';
import HoverItem from './HoverItem.jsx';


const HomeModal = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:5000/read')
      .then((response) => {
        setUserList(response.data);
      });
  }, []);

  return(
    <div>
      {
        _.map(userList, (user, i) => {
          return(
            <div
              key={ i }
              className="DataRows"
            >
              <HoverItem 
                client={ user }
              />
            </div>
          );
        })
      }
    </div>
  );
};

export default HomeModal;