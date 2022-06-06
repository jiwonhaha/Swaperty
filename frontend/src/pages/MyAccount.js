import React, {useEffect, useState, useContext } from "react";
import { useParams , Link} from "react-router-dom";
import axios from "axios"
import classes from "./pagesCss/MyAccount.module.css"
import Card from "../ui/Card";
import { useNavigate } from 'react-router';
import AuthContext from "../Auth/authentication/AuthContext";
import arrow from "../components/Images/arrow.svg";


function MyAccountPage(){

  let { user } = useContext(AuthContext);
  const[houses, sethouses] = useState([])
  const[requests, setRequests] = useState([])
  const[num, setNum] = useState(0)
  const [isLoading, setIsLoading] = useState(true);
  let navigate = useNavigate();
  let {id} = useParams();

  console.log(user.user_id)

  useEffect(()=> {
    axios.get(`/housedata/uid/${user.user_id}`)
    .then((res)=>{
      console.log(res)
      sethouses(res.data)
      setIsLoading(false);
    })
    axios.get(`/request/userID/${user.user_id}`)
    .then((res)=>{
      console.log(res)
      setRequests(res.data)
    })
  },[])

  const houseDelete = (houseid) => {
    axios.delete(`/housedata/${houseid}`).then(
    navigate(`/`)
    )
  }

  const requestView = (houseid) => {
    navigate(`/requestview/${houseid}`)
  }

  const houseUpdate = (houseid) => {
    navigate(`/updateHouse/${houseid}`)
  }

  const deleteRequest = (requestid) => {
    axios.delete(`/request/${requestid}`)
    navigate(`/`)
  }

  const viewHouse = (houseid) => {
    navigate(`/houseDetail/${houseid}`)
  }

  return(
    <div>
      <h3 >Register your house</h3>
      <div className={classes.item}>
    <Link to="/registerHouse">
     <img className={classes.iconbox} src={arrow} alt="register house"/>
       
  </Link>
      </div>
    {houses.map((house) => (
         <Card>
      <div key={house.id} className={classes.item}>
        <div className={classes.content}>
        </div>
        <div className={classes.image}>
        <img src={`http://127.0.0.1:8000${house.image}`} alt={house.title} />
        </div>
        <div className={classes.content}>
          <h3>{house.title}</h3>
          <h4>Swapin Date: {house.swapIn}  / Swapout Date: {house.swapOut}</h4>
          <address>{house.province}</address>
          {house.description.length > 35 ? (<textarea
                className={classes.descriptionText}
                type="text"
                id="description"
                placeholder="Describe your house"
                value={house.description.slice(0,35) + "..."}
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
        <div style={{marginTop : "2rem"}}>
      {house.request ? (<a className={classes.new}>RECEIVED!</a>) : (<span></span>)}
        </div>
        <div className={classes.actions}>
          <button onClick={() => houseUpdate(house.id)}>Update</button>
          
          <button onClick={() => requestView(house.id)}>Received Request</button>
          
          <button onClick={()=> houseDelete(house.id)}>Delete</button>
        </div>
      </div>
      </Card>
    ))}
    <h2 className={classes.om}>History send requests</h2>
    {requests.length === 0 ? (<h3>Empty....</h3>) : (<div>
      {requests.map((request) => (
        <Card>
          <div key={request.id}>
            <div className={classes.content}>
              <h3>Swap Window : {request.swapin} ~ {request.swapout}</h3>
              <div className={classes.req}>Request : {request.explain}</div>
              <dr />
              <div style={{marginTop :"2rem"}}>
                Your request : 
              {request.status === 0 ? (<span> Waiting ... </span>)
               : (request.status === 1 ? (<span style={{color :"blue"}}>Accepted <div style={{color : "black" , marginTop:"1rem"}}>Swapper will contact with you in a bit through your email</div></span>) : (<span style={{color :"red"}}> Rejected </span>))}
              </div>
              {request.status === 1 ? (<div className={classes.actionsa}>
                <button onClick={() => viewHouse(request.HouseData_id)}>View </button>
              </div>) : (<div className={classes.actionsa}>
                <button onClick={() => viewHouse(request.HouseData_id)}>View </button>
                <button onClick={() => deleteRequest(request.id)}>Delete</button>
              </div>)}
            </div>
          </div>
        </Card>
      ))}
    </div>)}
    </div>
  )
}

export default MyAccountPage
