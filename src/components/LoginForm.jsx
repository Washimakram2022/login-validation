import React, { useState } from "react";
import "../components/style/LoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";



const LoginForm = () => {

  const history = useNavigate();

    const [userval, setUserval] = useState({
        email:"",
        password:""
    })

    // const [data,setData] = useState([]);

    console.log(userval)
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

        const getuserArr = localStorage.getItem("user");

        const {email,password} = userval;
     
        if(email === ""){
            alert("email field is required")
        }
        
        else if(!email.includes("@")){
            alert("plzz enter valid email")
        }
        else if(password === ""){
            alert("password field is required")
        }
        else if(password.length < 8){
            alert("password should be minimum 8 char")
        }
        else{
            if(getuserArr && getuserArr.length){
              const userdata = JSON.parse(getuserArr);
              console.log(userdata);
              const userlogin = userdata.filter((elm,k)=>{
                return elm.email === email && elm.password === password
              });
              if(userlogin.length === 0){
                alert("Invalid details");
              }
              else{
                localStorage.setItem("user_login",JSON.stringify(userlogin))

                history("/profile");
              }
            }
        }
       }
  return (
    <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
      <div className="login">
        <h2 className="mb-3">Log In</h2>

        <form className="needs-validation">
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
          <div className="form-group form-check mb-2">
            <input type="checkbox" className="form-check-input"></input>
            <label  className="form-check-label">
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-success block w-100 mt-2" onClick={addData}>
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
