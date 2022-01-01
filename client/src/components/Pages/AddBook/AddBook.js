import React, { useState } from "react";
import "./AddBook.css";
import logo from "../../../image/books-stack-of-three (1).png";
import { Link,useNavigate } from "react-router-dom";

function AddBook() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  // const [book, setBook] = useState({});

  // const setBookDetails = () => {
  //   setBook({ title, author, link, description, category, price });
  //   postBookData();
  // };

  //useEffect(()=>{
  const postBookData = async (e) => {
    //console.log(book);
    e.preventDefault();
    
   // try {
      console.log({ title, author, link, description, category, price });
      const res = await fetch("http://localhost:4000/POST/book", {
        method: "POST",
        body: JSON.stringify({ title, author, link, description, category, price }),
        headers: {
          "Content-Type": "application/json",
          Accept:"application/json",
        },
       
      });
      const data = await res.json();
      
      console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
    navigate('/');
  };




 

  return (
    <div className="addbook-body">
      <div className="addbook-container">
        <div className="addbook-content">
          <img src={logo} alt="book" />
          <div className="addbook-content__inputs">
            <div className="title column">
              <label>Title</label>
              <input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></input>
            </div>
            <div className="link column">
              <label>Link of image</label>
              <input
                onChange={(e) => {
                  setLink(e.target.value);
                }}
              ></input>
            </div>
            <div className="author column">
              <label>Author</label>
              <input
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              ></input>
            </div>

            <div className="category-price">
              <div className="category">
                <label>Category</label>
                <select
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                >
                  <option ></option>
                  <option value="chemistry">Chemistry</option>
                  <option value="math">Math</option>
                  <option value="physics">Physics</option>
                </select>
              </div>
              <div className="price">
                <label>Price</label>
                <input
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="description column">
              <label>Description</label>
              <textarea
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>

            <div className="buttons">
              <button className="submit" onClick={postBookData}>
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
  );
}

export default AddBook;
