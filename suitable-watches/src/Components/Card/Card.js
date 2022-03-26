import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Card = (props) => {
      const { image, name, price } = props;

      return (
            <div className='col-12 col-md-6 col-lg-4 my-3'>
                  <div className="card">
                        <img src={image} className="card-img-top" height={150} alt={"Blank_Image"} />
                        <div className="card-body">
                              <h5 className="card-title">{name}</h5>
                              <h6>${price}</h6>
                              <button className="btn btn-primary" onClick={() => props.handleClick(props)}>Select This <FontAwesomeIcon icon={faHeart} /></button>
                        </div>
                  </div>
            </div>
      );
};

export default Card;