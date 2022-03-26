import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Card = (props) => {
      return (
            <div className='col-4 my-3'>
                  <div className="card">
                        <img src={props.image} className="card-img-top" height={150} alt={"Blank_Image"} />
                        <div className="card-body">
                              <h5 className="card-title">{props.name}</h5>
                              <h6>${props.price}</h6>
                              <button className="btn btn-primary" onClick={() => props.handleClick(props)}>Select This <FontAwesomeIcon icon={faHeart} /></button>
                        </div>
                  </div>
            </div>
      );
};

export default Card;