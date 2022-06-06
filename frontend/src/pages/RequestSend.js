import { useNavigate, useParams } from "react-router-dom";
import React, {useState, useContext, useEffect} from "react"
import axios from "axios";
import classes from "./pagesCss/RequestSend.module.css"
import AuthContext from "../Auth/authentication/AuthContext";
import logo from "../components/Images/logo.svg";
import Card2 from "../ui/Card2"

const RequestSendPage = () => {
  let {user} = useContext(AuthContext);
  const {id} = useParams();

  const[FromHouses, setFromHouses] = useState([])
  const[Tohouses, setToHouses] = useState([])
  const[swapin, setSwapin] = useState('')
  const[swapout, setSwapout] = useState('')
  const[explain, setExplain] = useState('')
  const[checked, setChecked] = useState([])

  const navigate = useNavigate();
  
  console.log(checked[0])
  useEffect(()=> {
    axios.get(`/housedata/${id}/`)
    .then((res)=> {
      setToHouses(res.data)
    })
    axios.get(`/housedata/uid/${user.user_id}`)
    .then((res)=>{
      setFromHouses(res.data)
      console.log(res.data)
    })
  },[])

  let handleSubmit = (e) => {
    e.preventDefault();
    if(swapin.match("[0-9]{2}.[0-9]{2}.[0-9]{4}") === null ){
      alert("Swap-in doesn't match with form")
    }
    else if(swapout.match("[0-9]{2}.[0-9]{2}.[0-9]{4}") === null ){
      alert("Swap-out doesn't match with form")
    }
    else if(checked.length !== 1){
      alert("Choose one house for swap")
    }
    else {
      let redata = new FormData();
      let dt = new FormData();
      console.log(redata)
      redata.append("user_id",user.user_id)
      redata.append("HouseData_id",Tohouses.id)
      redata.append("swapin",swapin)
      redata.append("swapout",swapout)
      redata.append("explain",explain)
      redata.append("status", 0)
      redata.append("fromHouse_id",checked[0])
      redata.append("fromEmail", user.username)
      dt.append("request", true);
      axios.post("/request/",redata,{
        headers:{
          "content-type":"multipart/form-data"
        }
      })
      .then(
        console.log("put"),
        axios.put(`/housedata/${Tohouses.id}/`, dt,{
          headers: {
            "content-type": "multipart/form-data",
          }
        }
      ))
      .then((res) => {
        console.log(res.data)
        navigate('/');
      })
      .catch((err) => console.log(err))
    }
  }

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  var isChecked = (item) =>
  checked.includes(item) ? "checked-item" : "not-checked-item";


  return(
    <div>
         <div className={classes.contactwrap}>
            <dl className={classes.dl}>
              <h3>To.. {Tohouses.title}</h3>
              <dd className={classes.timesbox}>
                Swap Window : {Tohouses.swapIn} ~ {Tohouses.swapOut}
              <dd className={classes.dis}>{Tohouses.description}</dd>
              </dd>
            </dl>
          </div>
          <br />
          <Card2>
             <div className={classes.logobox}>
                <img src={logo} alt="swaperty logo"></img>
              </div>
              <ul className={classes.timeselectbox}>
                <li>
                  <div className={classes.inputbox}>
                    <label>Swap In</label>
                    <input
                      type="text"
                      id="swapin"
                      placeholder="Swap In date"
                      pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
                      value={swapin}
                      onChange={e => setSwapin(e.target.value)}                   
                      required
                    />
                    <small>Format: dd.mm.yyyy</small>
                  </div>
                </li>
                <li>
                  <div className={classes.inputbox}>
                    <label>Swap Out</label>
                    <input
                      type="text"
                      id="swapout"
                      placeholder="Swap Out date"
                      pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
                      value={swapout}
                      onChange={e => setSwapout(e.target.value)}
                      required
                    />
                    <small>Format:    dd.mm.yyyy</small>
                  </div>
                </li>
              </ul>
              <div className={classes.textareabox}>
                <textarea
                  type="text"
                  id="explain"
                  placeholder="Why do you want to swap ?"
                  value={explain}
                  onChange={e => setExplain(e.target.value)}
                  required
                />
              </div>
              <div className={classes.checklist}>
              <h3>With this house</h3>
              <div>
              {FromHouses.map((house,index) => (
                <div key={house.id} className={classes.content}>
          
               <input value={house.id} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(house.id)}>{house.title}</span>
              </div>
              ))}
              </div>
              <div className={classes.btnarea}>
                <button onClick={handleSubmit}>Send Request</button>
              </div>
            </div>
            </Card2>    
</div>
  )

}

export default RequestSendPage