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
                        <h4>Name: {props.item.name}</h4>
                        <p>Author: {props.item.author}</p>
                        <p>Price: {props.item.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard
