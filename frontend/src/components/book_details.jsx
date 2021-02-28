import React, { useEffect } from "react";
import {useParams} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {details_book} from "../redux/actionCreator";
import Styles from "./css/details.module.css";

function Details(){
    const {id}=useParams();
    const book=useSelector(state => state.books[0]);
    const dispatch=useDispatch();
   useEffect(()=>{
    dispatch(details_book(id))
   },[dispatch,id])
   console.log(book)
    return (
        <div className={Styles.container} style={{display:"flex"}}>
           {book && <div 
                className={Styles.chapters}
              >
                <h3>Chapters</h3>
                {book.chapters.map(item=>  <p>{item.no}: {item.title}</p>)}
              </div>
               }
               {
                   book &&<div   className={Styles.details}>
                   <h2 key={book.title}>Title: {book.title}</h2>
                   <h2  key={book.author}>Author: {book.author}</h2>
                   <h2  key={book.year}>Published in : {book.year}</h2>
                   <h2  key={book.category}>Category: {book.category}</h2>
               </div>
               }
               
        </div>
    )
}

export default Details