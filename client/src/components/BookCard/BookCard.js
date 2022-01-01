import React from "react";
import deleteButton from "../../image/delete.png";
import "./BookCard.css";
import edit from "../../image/edit.png";
import {Link} from 'react-router-dom';

function BookCard(props) {
  const link=props.item._id;
  const deleteBook = async(id) =>{
   
    const res = await fetch(`http://localhost:4000/DELETE/book/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      }
    });
    props.callGetBooks();
    //console.log("DELETE = "+res.json());
  }
  return (
    <div className="bookcard-body">
      <div className="bookcard-content">
        <Link style={{"text-decoration":"none"}} to={`/detail-book/${props.item._id}`} className="bookcard-upper">
          <img src={props.item.link} alt="book" />
        </Link>
        <div className="bookcard-lower">
          <div className="bookcard-lower__content">
            <h4>Name: {props.item.title}</h4>
            <p>Author: {props.item.author}</p>
            <p>Price: {props.item.price}</p>
            <div className="content__buttons">
              <Link to={`/edit-book/${link}`}><img className="edit" src={edit} alt="edit" /></Link>
              <img className="delete" onClick={()=>{deleteBook(link)}} src={deleteButton} alt="delete" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
