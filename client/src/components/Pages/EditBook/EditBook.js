import React from "react";
import { useParams } from "react-router-dom";
import "./EditBook.css";
import { Link } from "react-router-dom";

const DUMMY_LIST = [
  {
    id: "1",
    name: "Chemistry",
    category: "Science",
    img: "https://images-na.ssl-images-amazon.com/images/I/71QENhDe4eL.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "soumodeep",
    price: "$4.5",
  },
  {
    id: "2",
    name: "Chemistry",
    category: "Science",
    img: "https://kbimages1-a.akamaihd.net/d4a168a7-2546-4fc1-9653-bc8e8deffa2a/1200/1200/False/atom-and-molecules-chemistry-book-grade-4-children-s-chemistry-books.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "soumodeep",
    price: "$4.5",
  },
  {
    id: "3",
    name: "Chemistry",
    category: "Science",
    img: "https://images-na.ssl-images-amazon.com/images/I/81jnf5afqxL.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "soumodeep",
    price: "$4.5",
  },
  {
    id: "4",
    name: "Chemistry",
    category: "Science",
    img: "https://images-na.ssl-images-amazon.com/images/I/51NCkRvCuuL._SX332_BO1,204,203,200_.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "soumodeep",
    price: "$4.5",
  },
  {
    id: "5",
    name: "Chemistry",
    category: "Science",
    img: "https://images-na.ssl-images-amazon.com/images/I/61pAhyF7wxL.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "soumodeep",
    price: "$4.5",
  },
  {
    id: "6",
    name: "Chemistry",
    category: "Science",
    img: "https://www.worldscientific.com/action/showCoverImage?doi=10.1142/7112",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "soumodeep",
    price: "$4.5",
  },
  {
    id: "7",
    name: "Chemistry",
    category: "Science",
    img: "https://5.imimg.com/data5/JC/UR/GLADMIN-10649677/cbse-chemistry-class-book-500x500.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "soumodeep",
    price: "$4.5",
  },
  {
    id: "8",
    name: "Chemistry",
    category: "Science",
    img: "https://images-na.ssl-images-amazon.com/images/I/71QENhDe4eL.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "soumodeep",
    price: "$4.5",
  },
  {
    id: "9",
    name: "Chemistry",
    category: "Science",
    img: "https://images-na.ssl-images-amazon.com/images/I/71QENhDe4eL.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "soumodeep",
    price: "$4.5",
  },
  {
    id: "10",
    name: "Chemistry",
    category: "Science",
    img: "https://kbimages1-a.akamaihd.net/d4a168a7-2546-4fc1-9653-bc8e8deffa2a/1200/1200/False/atom-and-molecules-chemistry-book-grade-4-children-s-chemistry-books.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "soumodeep",
    price: "$4.5",
  },
  {
    id: "11",
    name: "Chemistry",
    category: "Science",
    img: "https://images-na.ssl-images-amazon.com/images/I/81jnf5afqxL.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "soumodeep",
    price: "$4.5",
  },
  {
    id: "12",
    name: "Chemistry",
    category: "Science",
    img: "https://images-na.ssl-images-amazon.com/images/I/51NCkRvCuuL._SX332_BO1,204,203,200_.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "soumodeep",
    price: "$4.5",
  },
  {
    id: "13",
    name: "Chemistry",
    category: "Science",
    img: "https://images-na.ssl-images-amazon.com/images/I/61pAhyF7wxL.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "soumodeep",
    price: "$4.5",
  },
  {
    id: "14",
    name: "Chemistry",
    category: "Science",
    img: "https://www.worldscientific.com/action/showCoverImage?doi=10.1142/7112",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "soumodeep",
    price: "$4.5",
  },
  {
    id: "15",
    name: "Chemistry",
    category: "Science",
    img: "https://5.imimg.com/data5/JC/UR/GLADMIN-10649677/cbse-chemistry-class-book-500x500.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "soumodeep",
    price: "$4.5",
  },
  {
    id: "16",
    name: "Chemistry",
    category: "Science",
    img: "https://images-na.ssl-images-amazon.com/images/I/71QENhDe4eL.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "soumodeep",
    price: "$4.5",
  },
];

function EditBook() {
  const { id } = useParams();
  const getItem = (item) => {
    return item.id === id;
  };
  const item = DUMMY_LIST.filter(getItem);
  return (
    <div className="editbook-body">
      <div className="editbook-container">
        <div className="editbook-content">
          <div className="editbook-left__content">
            <div className="editbook-left__content--image">
              <img src={item[0].img} alt="book" />
            </div>
          </div>
          <div className="editbook-right__content">
            
              <div className="editbook-content__inputs">
                <div className="title column">
                  <label>Title</label>
                  <input value={item[0].name}></input>
                </div>
                <div className="link column">
                  <label>Link of image</label>
                  <input></input>
                </div>
                <div className="author column">
                  <label>Author</label>
                  <input value={item[0].author}></input>
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
                    <input type="number" value={item[0].price}></input>
                  </div>
                </div>
                <div className="description column">
                  <label>Description</label>
                  <textarea value={item[0].desc}></textarea>
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
