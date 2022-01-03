import React, { useState, useEffect } from "react";
import BookCard from "../../BookCard/BookCard";
import "./Home.css";


function Home() {
  const [books, setBooks] = useState([]);
  const [deleted, setDeleted] = useState(false);

  const getBooks = async () => {
      const res = await fetch("http://localhost:4000/GET/books", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data.data.books[0].title);
      
      setBooks(data.data.books);
    };
  useEffect(() => {
    getBooks();
  }, []);
  const deleteBook = () => {
    setDeleted(true);
    console.log(deleted);
  };

  return (
    <div className="home-body">
      <div className="home-container">
        <div className="home-content">
          {books.map((item) => {
            return (
              <div
                style={{ "text-decoration": "none" }}
                to={`/detail-book/${item._id}`}
              >
                <BookCard item={item} callGetBooks={getBooks} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
