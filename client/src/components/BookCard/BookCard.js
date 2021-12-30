import React from 'react'
import "./BookCard.css";
function BookCard(props) {
    return (
        <div className="bookcard-body">
            <div className="bookcard-content">
                <div className="bookcard-upper">
                    <img src={props.item.img} alt="book"/>
                </div>
                <div className="bookcard-lower">
                    <div className="bookcard-lower__content">
                        <h4>Name: Chemistry</h4>
                        <p>Author: Derek B.Lowe</p>
                        <p>Price: $4.5</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard
