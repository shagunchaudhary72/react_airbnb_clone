import { FavoriteBorder, Star } from '@material-ui/icons'
import React from 'react'
import "./Available.css"

const Available = ({imgSrc, location, features, ratings , cost, totalCost  }) => {
    return (
        <div className="availableMainDiv">
            <div className="availableLeft">
                <img src={imgSrc} alt="AvailabeleHotel"/>
            </div>  
            <div className="availableMiddle">
                <p className="availableTitle">Private Rooms in center of London</p>
                <p className="availableLocation">{location}</p>
                <p>___</p>
                <p className="availableFeatures">{features}</p>
                <h2>
                    <Star className="availableRatingsIcon"/>
                    {ratings}
                </h2>
            </div>  
            <div className="availableRight">
                <FavoriteBorder />
                <h2>${cost}/night</h2>
                <p>${totalCost} total</p>
            </div>  
        </div>
    )
}

export default Available
