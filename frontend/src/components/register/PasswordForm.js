import axios from "axios";
import React, {useState} from "react";
import { useNavigate} from "react-router-dom"
import classes from "../../pages/pagesCss/RegisterForm.module.css"

function PasswordForm(){

  const navigate = useNavigate();

  const [input, setInput] = useState({
    first_name:'',
    last_name:'',
    email:'',
    username: '',
    password: '',
    confirmPassword: ''
  });
 
  const [error, setError] = useState({
    password: '',
    confirmPassword: ''
  })

  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("send form")
    console.log(input.email)
    let registerUser = new FormData();
    registerUser.append("first_name",input.first_name);
    registerUser.append("last_name",input.last_name);
    registerUser.append("email",input.email)
    registerUser.append("password",input.password)
    registerUser.append("username",input.email)
    let response = await axios.post("/login/user/",registerUser,{
        headers:{
          "content-type" : "multipart/form-data"
        }
    }
    )
    if(response.status === 201){
      navigate("/signIn")
    }
    else {
      alert("something is wrong")
    }
    
  }

  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };
 
      switch (name) {
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;
 
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;
 
        default:
          break;
      }
 
      return stateObj;
    });
  }

  return (
    <div >
      <form  className={classes.form} onSubmit={handleSubmit}> 
        <div className={classes.control}>
          <label>First Name</label>
         <input
          type="text"
          name="first_name"
          placeholder='Enter first name'
          value={input.first_name}
          onChange={onInputChange}
        ></input>
        </div>

        <div className={classes.control}>

        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          placeholder='Enter last name'
          value={input.last_name}
          onChange={onInputChange}
          ></input>
          </div>

        <div className={classes.control}>

        <label>Email Address</label>
         <input
          type="email"
          name="email"
          placeholder='Enter email'
          value={input.email}
          onChange={onInputChange}
          ></input>
          </div>
        <div className={classes.control}>

        <label>Password</label>
                <input
          type="password"
          name="password"
          placeholder='Enter Password'
          value={input.password}
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.password && <small style={{color:"red"}}>{error.password}</small>}
 
          </div>

          <div className={classes.control}>

        <label>Confirm Password</label>
                <input
          type="password"
          name="confirmPassword"
          placeholder='Enter Confirm Password'
          value={input.confirmPassword}
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.confirmPassword && <small style={{color:"red"}}>{error.confirmPassword}</small>}
          </div>
 

        <div className={classes.control}>

          <div className={classes.actions}>
              <button >Register</button>
          </div>
        </div>
      </form>
    </div>
  );
}


export default PasswordForm