import React from 'react';
import { useHistory } from 'react-router';

const Card = (props) => {
    const {id, albumId, title, url, thumbnailUrl} = props.card;
    const history = useHistory();
    const cardDetails = id =>{
        const url = `card/${id}`;
        history.push(url);
    }
    return (
        <div className="mt-3 mb-3 text-center  col-xl-4 col-lg-6 col-md-6">
            <div className="card" style={{width: "18rem"}}>
                <img src={thumbnailUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">{title}</p>
                    <button className="btn btn-primary" onClick={() => cardDetails(id)}>Card Details</button>
                </div>
            </div>
        </div>
    );
};

export default Card;