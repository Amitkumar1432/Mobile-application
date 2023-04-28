import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const View = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    mobileno: "",
    pincode: "",
  });

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    handleGetallData();
  }, []);

  const handleGetallData = async () => {
    let datastate;
    let getURL = `http://localhost:8000/api/users/adduser${id}`;
    let reqheader = {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    };

    try {
      datastate = await axios.get(getURL, reqheader);
      if (datastate.data.result === true) {
        setUserData(datastate.data.data);
      }
    } catch (e) {
      console.log("Get All Data API Have Issue!!");
    }
  };

  return (
    (
      <div className="container">
        <Link className="btn btn-primary" to="/">
          back to Home
        </Link>
        <h1 className="display-4">View id: {id}</h1>
      </div>
    ),
    (
      <ul>
        <li className="list-group-item">firstname :{View.firstname}</li>
        <li className="list-group-item">lastname :{View.lastname}</li>
        <li className="list-group-item">address :{View.address}</li>
        <li className="list-group-item">mobileno :{View.mobileno}</li>
        <li className="list-group-item"> pincode :{View.pincode}</li>
      </ul>
    )
  );
};

export default View;
