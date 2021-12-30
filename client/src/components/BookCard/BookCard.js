import React from "react";
import deleteButton from "../../image/delete.png";
import "./BookCard.css";
import edit from "../../image/edit.png";
import {Link} from 'react-router-dom';

function BookCard(props) {
  return (
    <div className="bookcard-body">
      <div className="bookcard-content">
        <div className="bookcard-upper">
          <img src={props.item.img} alt="book" />
        </div>
        <div className="bookcard-lower">
          <div className="bookcard-lower__content">
            <h4>Name: {props.item.name}</h4>
            <p>Author: {props.item.author}</p>
            <p>Price: {props.item.price}</p>
            <div className="content__buttons">
              <Link to={`/edit-book/${props.item.id}`}><img className="edit" src={edit} alt="edit" /></Link>
              <img className="delete" src={deleteButton} alt="delete" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
