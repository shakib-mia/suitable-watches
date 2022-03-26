import React from 'react';

const Card = (props) => {
      return (
            <div className="col-4">
                  <div className="card">
                        <img src={props.img} className="card-img-top" alt={props.title} />
                        <div className="card-body">
                              <h5 className="card-title">{props.title}</h5>
                              <p className="card-text">{props.model}</p>
                              <button className="btn btn-primary">More About {props.model}</button>
                        </div>
                  </div>
            </div >
      );
};

export default Card;