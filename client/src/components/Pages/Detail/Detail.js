import React,{useState,useEffect} from "react";
import "./Detail.css";
import {useParams} from 'react-router-dom';



function Detail() {
  const [book,setBook] = useState({});


    const {id }= useParams();
    console.log(id);


    useEffect(()=>{    const getBook = async () =>{
      const res = await fetch(`http://localhost:4000/GET/book/${id}`,{
        headers:{
          'Content-Type':'application/json'
        }
      })
      const book = await res.json();
      console.log(book);
      setBook(book.data.book);
    }
      getBook()},[])

    
    

  return (
    <div className="detail-body">
      <div className="detail-container">
        <div className="detail-content">
          <div className="detail-left__content">
            <div className="image-content">
              <img
                src={book.link}
                alt="book"
              />
            </div>
          </div>
          <div className="detail-right__content">
            <div className="detail-right_text">
              <h1>Title: {book.title}</h1>
              <h3>Author: {book.author}</h3>
              <p>
               {book.description}
              </p>
              <p>Price: {book.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
