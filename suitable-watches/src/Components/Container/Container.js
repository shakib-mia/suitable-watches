import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';


const Container = () => {
      const [watches, setWatches] = useState([]);

      useEffect(() => {
            fetch('Data.json')
                  .then(res => res.json())
                  .then(data => setWatches(data))
      }, []);

      console.log(watches)

      return (
            <div className="container">
                  <div className='row'>
                        <div className="all-watches col-12 col-md-6 col-lg-8">
                              <div className="row">
                                    {watches.map(watch => <Card key={watch.id} image={watch.image} name={watch.name} price={watch.price}></Card>)}
                              </div>
                        </div>
                        <div className="selected-watches col-12 col-md-6 col-lg-4 bg-warning">
                              Colleccted Watches
                        </div>
                  </div>
            </div>
      );
};

export default Container;