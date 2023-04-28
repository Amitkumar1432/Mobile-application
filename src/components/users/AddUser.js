import React, { useState } from "react";
import axios from "axios";

const AddUser = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    mobileno: "",
    pincode: "",
  });

  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    let datastate;
    let url = "http://localhost:8000/api/users/adduser";

    let header = {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    };

    try {
      datastate = await axios.post(url, { userData }, header);

      // console.log(datastate.result);
      // console.log(datastate.status);
      // console.log(datastate.message);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container p-4">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add New User</h2>
        <form name="add_user">
          <div className="row ">
            <div className="col-lg-6 form-group pb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your firstname"
                name="firstname"
                value={userData.firstname}
                onChange={handleOnChange}
              />
            </div>
            <div className="col-lg-6 form-group pb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your lastname"
                name="lastname"
                value={userData.lastname}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-6 form-group pb-3">
              <textarea
                className="form-control form-control-lg"
                placeholder="Enter Your address"
                name="address"
                value={userData.address}
                onChange={handleOnChange}
              />
            </div>
            <div className="col-lg-6 form-group pb-3">
              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="Enter Your mobileno"
                name="mobileno"
                value={userData.mobileno}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 form-group pb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your pincode"
                name="pincode"
                value={userData.pincode}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-5">
            <button
              type="button"
              onClick={handleOnSubmit}
              className="btn btn-primary btn-block"
            >
              + Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
