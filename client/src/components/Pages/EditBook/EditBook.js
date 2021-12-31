import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import "./EditBook.css";
import { Link } from "react-router-dom";


function EditBook() {

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
                  <input value={book.title}></input>
                </div>
                <div className="link column">
                  <label>Link of image</label>
                  <input></input>
                </div>
                <div className="author column">
                  <label>Author</label>
                  <input value={book.author}></input>
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
                    <input type="number" value={book.price}></input>
                  </div>
                </div>
                <div className="description column">
                  <label>Description</label>
                  <textarea value={book.description}></textarea>
                </div>

                <div className="buttons">
                  <button className="submit">Submit</button>
                  <Link to="/"><button className="cancel">Cancel</button></Link>
                </div>
              </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditBook;
