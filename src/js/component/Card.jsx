import React from "react";
import PropTypes from 'prop-types';


const Card = ({ image, title, description, buttonText }) => {
  return (

    <div className="card" >
      <img src={image} className="card-img-top" alt=" " />
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text  text-center">{description}</p>
      </div>
      <div className="card-footer text-center"><a href="#" className="btn btn-primary">{buttonText}</a></div>
    </div>
  )
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
}

export default Card;