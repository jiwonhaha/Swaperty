import { useNavigate } from "react-router-dom";
import React, { useState, useContext, useEffect} from "react";
import axios from "axios";
import AuthContext from "../Auth/authentication/AuthContext";
import classes from "./pagesCss/ContactUs.module.css"


const ContactUsPage = () => {

    let {user} = useContext(AuthContext)

    const [user_id, setId] = useState("")
    const[title,setTitle]=useState("")
    const[description, setDescription] = useState("")

    const navigate = useNavigate();

    let handleSubmit = async(e) =>{
      let form_data = new FormData();
    if(user){
      form_data.append("user_id",user.username)
    }
    else {
      form_data.append("user_id", user_id);
    }
    form_data.append("title", title);
    form_data.append("description", description);
    console.log(form_data)
    axios
      .post("/contactUs/", form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        navigate('/')
      })
      .catch((err) => console.log(err));
    }
    return(
            <div>
             <div>
               {user ? (
                 <div className={classes.bar}> 
                  <label className={classes.inputlabel}>Email</label>
                  <input className={classes.inputItem} 
                      type = "email"
                      id = "user_id"
                      value = {user.username}
                  />  
                 </div>
      
               ) : (<div className={classes.bar}> 
                <label className={classes.inputlabel}>Email</label>
                <input className={classes.inputItem} 
                    type = "email"
                    id = "user_id"
                    value = {user_id}
                    onChange ={e => setId(e.target.value)}
                />    
               </div>
               )}
             </div>
                <div className={classes.bar}>
                  <label className={classes.inputlabel}>Title</label>
                  <input
                    className={classes.inputItem}
                    type="text"
                    id="title"
                    placeholder="What kind of problem you are suffering?"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                </div>
                    <br/>
                    <br/>
                <div className={classes.bar}>
                  <label className={classes.inputD}>Question or Problem</label>
                  <textarea
                    className={classes.descriptionText}
                    type="text"
                    id="description"
                    placeholder="Please write your question or description of problem you're trying to solve here"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </div>
                <div className={classes.actions}>
                    <button onClick={handleSubmit}>Contact Swaperty team!</button>
                </div>
        
            </div>
    )
}

export default ContactUsPage;