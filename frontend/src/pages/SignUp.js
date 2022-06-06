import React, { Component } from "react";
import axios from "axios";
import Card from "../ui/Card";
import PasswordForm from "../components/register/PasswordForm";

class RegisterForm extends Component {
  state = {
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    passwordConfirm:"",
    username:"",
    isokay:false,
  };

  handleConfirm = (e) => {
    this.setState({
      [e.target.id] : e.target.value,
    });
    console.log(this.state)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value,
    });

    console.log(this.state)
  };

  handleSubmit = async (e) => {
    console.log(this.state)
    let data = new FormData();
    data.append("first_name", this.state.first_name);
    data.append("last_name", this.state.last_name);
    data.append("email", this.state.email);
    data.append("password", this.state.password);
    data.append("username", this.state.email); 
    axios.post("/login/user/", data, {  
      headers:{
        "content-type" : "multipart/form-data",
      },
    })
    .then((res) => {
      this.isokay = true;
    })
    .catch((err) => console.log(err))
  };

  render(){
    return (
      <Card>
        <PasswordForm />
      </Card>
    );

  }
}

export default RegisterForm;
