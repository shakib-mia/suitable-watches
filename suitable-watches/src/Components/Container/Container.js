import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Selected from '../Selected/Selected';


const Container = () => {
      const [watches, setWatches] = useState([]);
      const [selection, setSelection] = useState([]);
      useEffect(() => {
            fetch('Data.json')
                  .then(res => res.json())
                  .then(data => setWatches(data))
      }, []);

      const handleClick = (watch) => {
            const newSelection = [...selection, watch];
            setSelection(newSelection)
      }


      const show = () => {
            console.log(selection);
            if (selection.length > 0) {
                  return selection.length > 0 ? selection.map(item => <Selected name={item.name} price={item.price}></Selected>) : "No Items added"
            }
      }

      const choose = () => {
            let length = selection.length;
            let num = Math.floor(Math.random() * length);
            console.log(selection[num]);
            document.getElementById('selected').innerHTML = `
            <img src=${selection[num].image} height="150px"/>
            <h1>${selection[num].name}</h1>
            `
      }

      return (
            <div className="container">
                  <div className='row' id="exampleModal">
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
                        <div className="selected-watches col-12 col-md-6 col-lg-4" id='selected'>
                              {
                                    show()
                              }
                              <button className='btn btn-success' onClick={choose}>Choose one for me</button>
                        </div>
                  </div>
            </div>
      );
};

export default Container;