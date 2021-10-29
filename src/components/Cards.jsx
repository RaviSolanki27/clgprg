import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../images/stars.png';

function Cards() {
    return (
        <div className="justify-content-evenly">
            <div className="card"  style={{width:"18rem"}} >
  <img src={img2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/" className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
        </div>
    )
}

export default Cards;
