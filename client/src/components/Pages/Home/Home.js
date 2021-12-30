import React from "react";
import BookCard from "../../BookCard/BookCard";
import "./Home.css";
import {Link} from 'react-router-dom';

const DUMMY_LIST =[
    {
        "id":"1",
        "name":"Chemistry",
        "category":"Science",
        "img":"https://images-na.ssl-images-amazon.com/images/I/71QENhDe4eL.jpg",
        "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "author":"soumodeep",
        "price":"$4.5"
    },
    {
        "id":"2",
        "name":"Chemistry",
        "category":"Science",
        "img":"https://kbimages1-a.akamaihd.net/d4a168a7-2546-4fc1-9653-bc8e8deffa2a/1200/1200/False/atom-and-molecules-chemistry-book-grade-4-children-s-chemistry-books.jpg",
        "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "author":"soumodeep",
        "price":"$4.5"
    },
    {
        "id":"3",
        "name":"Chemistry",
        "category":"Science",
        "img":"https://images-na.ssl-images-amazon.com/images/I/81jnf5afqxL.jpg",
        "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "author":"soumodeep",
        "price":"$4.5"
    },
    {
        "id":"4",
        "name":"Chemistry",
        "category":"Science",
        "img":"https://images-na.ssl-images-amazon.com/images/I/51NCkRvCuuL._SX332_BO1,204,203,200_.jpg",
        "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "author":"soumodeep",
        "price":"$4.5"
    },
    {
        "id":"5",
        "name":"Chemistry",
        "category":"Science",
        "img":"https://images-na.ssl-images-amazon.com/images/I/61pAhyF7wxL.jpg",
        "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "author":"soumodeep",
        "price":"$4.5"
    },
    {
        "id":"6",
        "name":"Chemistry",
        "category":"Science",
        "img":"https://www.worldscientific.com/action/showCoverImage?doi=10.1142/7112",
        "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "author":"soumodeep",
        "price":"$4.5"
    },
    {
        "id":"7",
        "name":"Chemistry",
        "category":"Science",
        "img":"https://5.imimg.com/data5/JC/UR/GLADMIN-10649677/cbse-chemistry-class-book-500x500.png",
        "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "author":"soumodeep",
        "price":"$4.5"
    },
    {
        "id":"8",
        "name":"Chemistry",
        "category":"Science",
        "img":"https://images-na.ssl-images-amazon.com/images/I/71QENhDe4eL.jpg",
        "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "author":"soumodeep",
        "price":"$4.5"
    },
    {
        "id":"9",
        "name":"Chemistry",
        "category":"Science",
        "img":"https://images-na.ssl-images-amazon.com/images/I/71QENhDe4eL.jpg",
        "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "author":"soumodeep",
        "price":"$4.5"
    },
    {
        "id":"10",
        "name":"Chemistry",
        "category":"Science",
        "img":"https://kbimages1-a.akamaihd.net/d4a168a7-2546-4fc1-9653-bc8e8deffa2a/1200/1200/False/atom-and-molecules-chemistry-book-grade-4-children-s-chemistry-books.jpg",
        "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "author":"soumodeep",
        "price":"$4.5"
    },
    {
        "id":"11",
        "name":"Chemistry",
        "category":"Science",
        "img":"https://images-na.ssl-images-amazon.com/images/I/81jnf5afqxL.jpg",
        "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "author":"soumodeep",
        "price":"$4.5"
    },
    {
        "id":"12",
        "name":"Chemistry",
        "category":"Science",
        "img":"https://images-na.ssl-images-amazon.com/images/I/51NCkRvCuuL._SX332_BO1,204,203,200_.jpg",
        "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "author":"soumodeep",
        "price":"$4.5"
    },
    {
        "id":"13",
        "name":"Chemistry",
        "category":"Science",
        "img":"https://images-na.ssl-images-amazon.com/images/I/61pAhyF7wxL.jpg",
        "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "author":"soumodeep",
        "price":"$4.5"
    },
    {
        "id":"14",
        "name":"Chemistry",
        "category":"Science",
        "img":"https://www.worldscientific.com/action/showCoverImage?doi=10.1142/7112",
        "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "author":"soumodeep",
        "price":"$4.5"
    },
    {
        "id":"15",
        "name":"Chemistry",
        "category":"Science",
        "img":"https://5.imimg.com/data5/JC/UR/GLADMIN-10649677/cbse-chemistry-class-book-500x500.png",
        "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "author":"soumodeep",
        "price":"$4.5"
    },
    {
        "id":"16",
        "name":"Chemistry",
        "category":"Science",
        "img":"https://images-na.ssl-images-amazon.com/images/I/71QENhDe4eL.jpg",
        "desc":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "author":"soumodeep",
        "price":"$4.5"
    }
]


function Home() {
  return (
    <div className="home-body">
      <div className="home-container">
        <div className="home-content">
         {DUMMY_LIST.map((item)=>{
             return (<Link to={`/detail-book/${item.id}`}>
            <BookCard item={item}/>
          </Link>);
         })  } 
        </div>
      </div>
    </div>
  );
}

export default Home;
