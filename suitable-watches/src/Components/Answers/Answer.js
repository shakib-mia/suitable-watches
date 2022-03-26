import React from 'react';

const Answer = () => {
      return (
            <div className='col-6 mx-auto'>
                  <div class="accordion" id="accordionExample">
                        <div class="card">
                              <div class="card-header" id="headingOne">
                                    <h2 class="mb-0">
                                          <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                How React works?
                                          </button>
                                    </h2>
                              </div>

                              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                          ReactJS is a component based front end web framework. It creates components for every section of webpage.
                                    </div>
                              </div>
                        </div>
                        <div class="card">
                              <div class="card-header" id="headingTwo">
                                    <h2 class="mb-0">
                                          <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                What are the differences between props and state?
                                          </button>
                                    </h2>
                              </div>
                              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
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