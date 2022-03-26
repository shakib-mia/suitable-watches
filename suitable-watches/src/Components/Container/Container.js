import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Selected from '../Selected/Selected';


const Container = () => {
      const [watches, setWatches] = useState([]);
      const [selection, setSelection] = useState([])

      useEffect(() => {
            fetch('Data.json')
                  .then(res => res.json())
                  .then(data => setWatches(data))
      }, []);

      const handleClick = (watch) => {
            const newSelection = [...selection, watch];
            setSelection(newSelection)
      }

      return (
            <div className="container">
                  <div className='row'>
                        <div className="all-watches col-12 col-md-6 col-lg-8">
                              <div className="row">
                                    {watches.map(watch => <Card
                                          key={watch.id}
                                          image={watch.image}
                                          name={watch.name}
                                          price={watch.price}
                                          handleClick={handleClick}
                                    ></Card>)}
                              </div>
                        </div>
                        <div className="selected-watches col-12 col-md-6 col-lg-4">
                              <Selected></Selected>
                              <p>{selection.length}</p>

                        </div>
                  </div>
            </div>
      );
};

export default Container;