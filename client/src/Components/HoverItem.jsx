import React, { useEffect, useState } from "react";
import _ from 'lodash';


const HoverItem = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  const defaultUserData = (user) => {
    return (
      <div>
        Name of the Client: { user.name }
      </div>
    );
  };

  const extraUserData = (user) => {
    return(
      <div>
        <div>
          Client EmailAddress: { user.emailAddress }
        </div>
        <div>
          Client Age: { user.age } 
        </div>
        <div>
          Client Phone Number: { user.phoneNumber }
        </div>
        <div>
          Client Company: { user.company }
        </div>
      </div>
    );
  };

  const mouseOver = () => {
    setIsHovering(true);
  };

  const mouseOut = () => {
    setIsHovering(false);
  };

  const user = props.client;

  return(
    <div
      className="UserDataRows"
      onMouseEnter={ mouseOver }
      onMouseLeave={ mouseOut }
    >
      <div className="DefaultUserData">
        {
          defaultUserData(user)
        }
      </div>
      <div className="ExtraUserData">
        {
          isHovering &&
          extraUserData(user)
        }
      </div>
    </div>
  );
};

export default HoverItem;