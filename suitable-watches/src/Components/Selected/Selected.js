import React from 'react';

const Selected = (props) => {
      const { name, key, price } = props
      return (
            <div>
                  <h1>{name}</h1>
                  <p>{price}</p>
                  <p>{key}</p>
            </div>
      );
};

export default Selected;