import React, { useEffect, useState } from "react";
import Styles from "./css/dashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { get_books, sort_by, filter_by, search } from "../redux/actionCreator";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";

function Dashboard() {
  const [search_book, setSearch] = useState("");
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const history=useHistory();
  const sortbyyear = (e) => {
    dispatch(sort_by(e.target.value));
  };
  const filterby = (e) => {
    dispatch(filter_by(e.target.value));
  };

  const searching = () => {
      if(search_book.trim().length===0){
        dispatch(get_books());
      }
    else{
        dispatch(search(search_book));
    }
  };

  const details=(details)=>{
    history.push(`/details/${details}`)
  }

  useEffect(() => {
    dispatch(get_books());
  }, [dispatch]);

  return (
    <div className={Styles.container}>
     <h3>The Online Library</h3>
      <div>
        <TextField style={{margin:"20px"}}
          onChange={(e) => setSearch(e.target.value)}
          id="outlined-basic"
          label="Book Name"
          variant="outlined"
        />
        <Button onClick={searching} style={{margin:"20px 0px",padding:"15px"}} variant="contained" color="primary">
      {books.length===0 && search_book.trim().length===0 ?"Go back":"Search"} 
</Button>
      </div>
      <div className={Styles.functionsDesign}>
        <label> Sort By:</label>
        <select onChange={(e) => sortbyyear(e)}>
          <option value="all">All</option>
          <option value="old">Old to Latest</option>
          <option value="new">Latest to Old</option>
        </select>
        <label> Filter:</label>
        <select onChange={(e) => filterby(e)}>
          <option value="all">Reset</option>
          <option value="Scifi">Scifi,</option>
          <option value="Romance">Romance</option>
          <option value="Educational">Educational</option>
        </select>
      </div>
      <div className={Styles.books}>
        {books.map((item) => {
          return (
            <div key={item._id} className={Styles.book}>
                <div className={Styles.page} >
                <div onClick={()=>details(item._id)}
                className={Styles.cover}
                style={{ backgroundColor: `${item.cover}` }}
              >
                <h4>{item.title}</h4>
                <h5>{item.author}</h5>
              </div>
              </div>
              <div className={Styles.details}>
                <p>Pages: {item.pages}</p>
                <p>Category: {item.category}</p>
                <p>Chapters: {item.chapters.length}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
