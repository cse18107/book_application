import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./EditBook.css";
import { Link, useNavigate } from "react-router-dom";

function EditBook() {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    link: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    const getBook = async () => {
      const res = await fetch(`http://localhost:4000/GET/book/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const book = await res.json();
      console.log(book);
      setBook(book.data.book);
    };
    getBook();
  }, []);

  const setData = (e) => {
    const { name, value } = e.target;

    setBook((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  console.log(book);

  const { id } = useParams();
  console.log(id);

  const updateBookData = async () => {
    console.log(book);
    
    const res = await fetch(`http://localhost:4000/PATCH/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });
    const data = await res.json();
    navigate("/");
    console.log(data);
  };

  return (
    <div className="editbook-body">
      <div className="editbook-container">
        <div className="editbook-content">
          <div className="editbook-left__content">
            <div className="editbook-left__content--image">
              <img src={book.link} alt="book" />
            </div>
          </div>
          <div className="editbook-right__content">
            <div className="editbook-content__inputs">
              <div className="title column">
                <label>Title</label>
                <input onChange={setData} defaultValue={book.title} />
              </div>
              <div className="link column">
                <label>Link of image</label>
                <input onChange={setData} defaultValue={book.link}></input>
              </div>
              <div className="author column">
                <label>Author</label>
                <input onChange={setData} defaultValue={book.author}></input>
              </div>

              <div className="category-price">
                <div className="category">
                  <label>Category</label>
                  <select onChange={setData} defaultValue={book.category}>
                    <option>Chemistry</option>
                    <option>Math</option>
                    <option>Physics</option>
                  </select>
                </div>
                <div className="price">
                  <label>Price</label>
                  <input onChange={setData} defaultValue={book.price}></input>
                </div>
              </div>
              <div className="description column">
                <label>Description</label>
                <textarea
                  onChange={setData}
                  defaultValue={book.description}
                ></textarea>
              </div>

              <div className="buttons">
                <button className="submit" onClick={updateBookData}>
                  Submit
                </button>
                <Link to="/">
                  <button className="cancel">Cancel</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditBook;
