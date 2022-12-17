import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile =() => {

    const getUserData=localStorage.getItem('user_login');
    const userData=  JSON.parse(getUserData);


    return (
        <div className="container">
            <div className="row g-3 mt-3">

                {/* First Row */}
                <div className="col-md-4">
                    <label className="form-label">First name</label>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="First Name" value={userData[0].name} />
                        <span className="input-group-text" id="basic-addon1">
                            <i className="fa-solid fa-pen-to-square"></i>
                        </span>
                    </div>
                </div>


                <div className="col-md-4">
                    <label className="form-label">Middle name <span className="text-muted fst-italic">-Optional</span></label>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Middle Name"/>
                    </div>
                </div>

                <div className="col-md-4">
                    <label className="form-label">Last name</label>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="First Name"  />
                        <span className="input-group-text" id="basic-addon1">
                            <i className="fa-solid fa-pen-to-square"></i>
                        </span>
                    </div>
                </div>

                {/* Second Row */}

                <div className="col-md-4">
                    <label className="form-label">Mobile</label>
                    <div className="input-group">
                        <input type="tel" className="form-control" placeholder="123-456-746"  />
                        <span className="input-group-text" id="basic-addon1">
                            <i className="fa-solid fa-pen-to-square"></i>
                        </span>
                    </div>
                </div>

                <div className="col-md-4">
                    <label className="form-label">Email <span className="text-muted fst-italic">-Optional</span></label>
                    <div className="input-group">
                        <input type="email" className="form-control" placeholder="abc@gmail.com" value={userData[0].email}/>
                    </div>
                </div>

                <div className="col-md-4">
                    <label className="form-label">Gender</label>
                    <select className="form-select" id="validationDefault04" required>
                        <option selected disabled>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                    </select>
                </div>

                {/* Third Row */}

                <div className="col-md-4">
                    <label className="form-label">Date of Birth <span className="text-muted fst-italic">-Optional</span></label>
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                            <i className="fa-solid fa-pen-to-square"></i>
                        </span>
                        <input type="text" className="form-control" placeholder="29-11-1991" value={userData[0].date} />
                    </div>
                </div>

                <div className="col-md-4">
                    <label className="form-label">Blood Group</label>
                    <select className="form-select" id="validationDefault04" required>
                        <option selected disabled >AB+</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>...</option>
                    </select>
                </div>


       

                <div className="col-md-4">
                    <label className="form-label">Identity Type <span className="text-muted fst-italic">-Optional</span></label>
                    <select className="form-select">
                        <option selected disabled >Aadhar Card</option>
                        <option >Pan Card</option>
                        <option >Passport</option>
                        <option >Voter Id Card</option>
                    </select>
                </div>

            </div>
        </div>
    );
}

export default Profile;