import React from 'react';
import Card from './Card/Card';
import Data from '../../Data/Data.json'

const Watches = () => {
      console.log(Data)
      return (
            <div className='row'>
                  {
                        Data.map(watch => <Card key={watch.id} title={watch.name} model={watch.id} img={watch.image} />)
                  }
            </div>
      );
};

export default Watches;