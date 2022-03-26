import React from 'react';

const Answer = () => {
      return (
            <div className='col-6 mx-auto'>
                  <div className="accordion" id="accordionExample">
                        <div className="card">
                              <div className="card-header" id="headingOne">
                                    <h2 className="mb-0">
                                          <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                How React works?
                                          </button>
                                    </h2>
                              </div>

                              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                          ReactJS is a component based front end web framework. It creates components for every section of webpage.
                                    </div>
                              </div>
                        </div>
                        <div className="card">
                              <div className="card-header" id="headingTwo">
                                    <h2 className="mb-0">
                                          <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                What are the differences between props and state?
                                          </button>
                                    </h2>
                              </div>
                              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div className="card-body">
                                          1. Props are read-only but state can be changed this change is asynchronous.<br />
                                          2. Props are immutable but states are mutable.<br />
                                          3. Props make component reusable but state cannot make components reusable.
                                    </div>
                              </div>
                        </div>

                  </div>
            </div>
      );
};

export default Answer;