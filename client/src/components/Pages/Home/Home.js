import React,{useState,useEffect} from "react";
import BookCard from "../../BookCard/BookCard";
import "./Home.css";
import {Link} from 'react-router-dom';




function Home() {
    const [books,setBooks] = useState([]);
    

    const getBooks = async()=>{
        const res =await fetch('http://localhost:4000/GET/books',{
            headers:{
                'Content-Type':'application/json',
            }
        });
        const data = await res.json();
        console.log(data.data.books[0].title);
        setBooks(data.data.books);
    }
    useEffect(()=>{getBooks()},[]);

  return (
    <div className="home-body">
      <div className="home-container">
        <div className="home-content">
         {books.map((item)=>{
             return (<Link style={{"text-decoration":"none"}} to={`/detail-book/${item._id}`}>
            <BookCard item={item}/>
          </Link>);
         })  } 
        </div>
      </div>
    </div>
  );
}

export default Home;
