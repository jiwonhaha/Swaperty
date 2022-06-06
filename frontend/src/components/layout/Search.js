import React, { useState } from "react";
import classes from "./Search.module.css";
import {useNavigate} from "react-router-dom"
import axios from "axios";

const SearchForm = (props)=> {

  const[province, setProvince] = useState('')
  const navigate = useNavigate()

  let handleSubmit = (e) => {
    if(province === ''){
      navigate('/houseListAll')
    }
    else{
      navigate(`/houseList/${province}`)
    }
  }
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.control}>
        <input
          type="text"
          value={province}
          placeholder="Province*"
          onChange={e => setProvince(e.target.value)}
        />
      </div>
      <div className={classes.actions}>
          <button>search</button>
      </div>
    </form>
  );
}

export default SearchForm;
