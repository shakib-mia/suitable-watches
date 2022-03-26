import React, { useState } from 'react';

const Selected = (props) => {
      // console.log(props);


      const [] = useState([])
      return (
            <div>
                  <h1>{props.name}</h1>
                  <p>{props.price}</p>
                  <p>{props.id}</p>
            </div>
      );
};

export default Selected;