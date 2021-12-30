import React from "react";
import "./AddBook.css";
import logo from "../../../image/books-stack-of-three (1).png";

function AddBook() {
  return (
    <div className="addbook-body">
      <div className="addbook-container">
        <div className="addbook-content">
          <img src={logo} alt="book" />
          <div className="addbook-content__inputs">
            <div className="title column">
              <label>Title</label>
              <input></input>
            </div>
            <div className="author column">
              <label>Author</label>
              <input></input>
            </div>

            <div className="category-price">
              <div className="category">
                <label>Category</label>
                <select>
                  <option>Chemistry</option>
                  <option>Math</option>
                  <option>Physics</option>
                </select>
              </div>
              <div className="price">
                <label>Price</label>
                <input type="number"></input>
              </div>
            </div>
            <div className="description column">
              <label>Description</label>
              <textarea></textarea>
            </div>

            <div className="buttons">
              <button className="submit">Submit</button>
              <button className="cancel">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
