import React, {useContext, useEffect, useState } from "react";
import { useParams , Link} from "react-router-dom";
import axios from "axios"
import classes from "./pagesCss/Requestview.module.css"
import Card1 from "../ui/Card1";
import Card from "../ui/Card"
import { useNavigate } from 'react-router';
import AuthContext from "../Auth/authentication/AuthContext";

function RequestViewPage(){

  let {user} = useContext(AuthContext);

  const[requests, setRequests] = React.useState([])
  const [isLoading, setIsLoading] = useState(true);
  let navigate = useNavigate();
  let {id} = useParams();
  const[house, setHouse] = useState([])


useEffect(()=> {
    axios.get(`/request/houseID/${id}`)
    .then((res)=>{
      console.log(res)
      setRequests(res.data)
      setIsLoading(false);
    })
    axios.get(`/housedata/${id}`)
    .then((res)=>{
      console.log(res)
      setHouse(res.data)
    })
},[setRequests])


const accept = async (requestid) => {
  let form_data = new FormData();
  form_data.append("status", 1)
  console.log(requests[requestid].swapin)
  form_data.append("swapin", requests[requestid].swapin)
  form_data.append("swapout", requests[requestid].swapout)
  form_data.append("explain", requests[requestid].explain)
  form_data.append("user_id", requests[requestid].user_id)
  console.log(form_data)
  axios
    .put(`/request/${requests[requestid].id}/`, form_data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log(res.data);
      navigate(`/myAccount/${user.user_id}`)
    })
    .catch((err) => console.log(err));
};

const reject = async (requestid) => {
  let form_data = new FormData();
  form_data.append("status", 2)
  form_data.append("swapin", requests[requestid].swapin)
  form_data.append("swapout", requests[requestid].swapout)
  form_data.append("explain", requests[requestid].explain)
  form_data.append("user_id", requests[requestid].user_id)
  axios
    .put(`/request/${requests[requestid].id}/`, form_data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log(res.data);
      navigate(`/myAccount/${user.user_id}`)
    })
    .catch((err) => console.log(err));
};

console.log(requests.length)

  return(
  <div>
    <h3>House : {house.title}</h3>
    {requests.length === 0 ? (<Card1><div className={classes.item}>
      <h3 style={{ height: "1rem", textAlign: "center"}}>Request list</h3>
      <h4 style={{ height: "1rem", textAlign: "center" }}>Empty ...</h4></div></Card1>) : (<div>
        <h3 style={{ height: "1rem", textAlign: "center"}}>Request list</h3>
    
      {requests.map((request, index) => (
         <Card>
      <div key={request.id} className={classes.item}>
          <h1>Swap Window: {request.swapin}  ~ {request.swapout}</h1>
          <div className={classes.req}>Request: {request.explain}</div>
          <div className={classes.actions}>
          {request.status === 0 ? (<span>
            <div ><button onClick={() => accept(index)}>Accept</button> <button onClick={() => reject(index)}>Reject</button> </div> </span>)
               : (request.status === 1 ? (<div><span style={{color :"blue"}}>Accepted</span> <br /> <div>Contact with swapper : {request.fromEmail}</div></div>) : (<span style={{color :"Red"}}> Rejected </span>))}
      </div>
      </div>
      </Card>
    ))}</div>)}
    
    </div>
  )

}

  export default RequestViewPage;