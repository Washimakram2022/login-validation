import React, { useState } from "react";
import "../components/style/LoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Signup = () => {

  const history = useNavigate();

    const [userval, setUserval] = useState({
        name:"",
        email:"",
        date:"",
        password:""
    })

    const [data,setData] = useState([]);

    const getdata = (e) => {
        
        const {value,name} = e.target;
        

        setUserval(() => {
            return{
                ...userval,
                [name]:value
            }
        })
    }

       const addData = (e)=>{
        e.preventDefault();
        const {name,email,date,password} = userval;

        if(name === "") {
            alert("name field is required")
        }
        else if(email === ""){
            alert("email field is required")
        }
        
        else if(!email.includes("@")){
            alert("plzz enter valid email")
        }
        else if(date === ""){
            alert("date field is required")
        }
        else if(password === ""){
            alert("password field is required")
        }
        else if(password.length < 8){
            alert("password should be minimum 8 char")
        }
        else{
            alert("registration successfull");

            localStorage.setItem("user",JSON.stringify([...data,userval]));
            history("/login");
        }
       }
  return (
    <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
      <div className="login">
        <h2 className="mb-3">Sign Up</h2>

        <form className="needs-validation">
        <div className="form-group was-validated mb-2">
            <label  className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              onChange={getdata}
              name="name"
              placeholder="Enter your name"
            ></input>
            <br />
          </div>
          <div className="form-group was-validated mb-2">
            <label  className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              onChange={getdata}
              name="email"
              placeholder="Enter email"
            ></input>
            <br />
          </div>
          <div className="form-group was-validated mb-2">
            <label  className="form-label">
              D.O.B
            </label>
            <input
              type="date"
              className="form-control"
              onChange={getdata}
              name="date"
              placeholder="Enter email"
            ></input>
            <br />
          </div>
          <div className="form-group was-validated mb-2">
            <label  className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={getdata}
              name="password"
              placeholder="Enter Password"
            ></input>
            <br />
          </div>
          <button type="submit" className="btn btn-success block w-100 mt-2" onClick={addData}>
            SIGN UP
          </button>
        </form>
        <p className="mt-3">Already have an Account <span> <NavLink to="/login">LogIn</NavLink> </span></p>
      </div>
    </div>
  );
};

export default Signup;
