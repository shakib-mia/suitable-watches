import React, { useEffect, useState } from 'react';
import Details from './Details/Details';
import Watches from './Watches/Watches';

const Container = () => {
      // console.log(Data)

      return (
            <div className='container'>
                  <div className="row">
                        <div className="col-9">
                              <Watches></Watches>
                        </div>
                        <div className="col-3">
                              <Details></Details>
                        </div>
                  </div>
            </div>
      );
};

export default Container;