import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import HouseList from "../components/houses/HouseList";
import classes from "./pagesCss/HouseList.module.css"
import Card from "../ui/Card";
import {Link, useParams, useNavigate} from "react-router-dom";
import AuthContext from "../Auth/authentication/AuthContext";

function HouseListAllPage(){

  let {user} = useContext(AuthContext)
  const[houses, setHouses] = useState([])

  console.log("check")

  useEffect(() => {
      axios.get(`/housedata`)
      .then((res)=>{
        console.log(res)
        setHouses(res.data)
      })
  },[])


  return (
    <div>
      {houses.map((house) => (
           <Card>
        <div key={house.id} className={classes.item}>
          <div className={classes.image}>
          <img src={`http://127.0.0.1:8000${house.image}`} alt={house.title}/>
          </div>
          <div className={classes.content}>
            <h3>{house.title}</h3>
            <h4>Swapin Date: {house.swapIn}  / Swapout Date: {house.swapOut}</h4>
            <address>Location : {house.province}</address>
            <div>
            {house.description.length > 45 ? (<textarea
                className={classes.descriptionText}
                type="text"
                id="description"
                placeholder="Describe your house"
                value={house.description.slice(0,45) + "..."}
                disabled
              />) : (<textarea
                className={classes.descriptionText}
                type="text"
                id="description"
                placeholder="Describe your house"
                value={house.description}
                disabled
              />)}

            </div>
          </div>
          <div className={classes.actions}>
            {user? (<Link to={`/houseDetail/${house.id}`}>
              <button>More detail</button>
            </Link>):(<Link to={`/signIn`}>
              <button>sign in for viewing detail</button>
              
              </Link>
            )}
          </div>
        </div>
        </Card>
      ))}
      
      </div>
  );
  
}


export default HouseListAllPage;