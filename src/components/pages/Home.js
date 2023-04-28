import React, { Fragment, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios, { Axios } from "axios";
// import { Button } from "bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    handleGetallData();
  }, []);

  // useEffect(() => {
  //   handleGetallData();
  // }, []);

  // const handleGetallData = async () => {
  //   const result = await axios.get("http://192.168.29.2:5000/api/allData");
  // };

  // or

  const handleGetallData = () => {
    axios
      .get("http://192.168.29.2:5000/api/allData/")
      .then((response) => response.json())
      .then((data) => setUserData(data));
  };
  //       setUserData(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const handleGetallData = async () => {
  //   let datastate;
  //   let getURL = "http://192.168.29.2:5000/api/allData";
  //   let reqheader = {
  //     headers: {
  //       Accept: "*/*",
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   try {
  //     datastate = await axios.get(getURL, reqheader);
  //     if (datastate.data.result === true) {
  //       setUserData(datastate.data.data);
  //     }
  //   } catch (e) {
  //     console.log("Get All Data API Have Issue!!");
  //   }
  // };

  // const handleDelete = (id) => {
  //   console.log(id);
  //   var index = userData
  //     .map(function (e) {
  //       return e.id;
  //     })
  //     .indexOf(id);
  //   let data = userData.slice(index, 0);
  //   setUserData(data);
  // };

  return (
    <Fragment>
      <div className="container">
        <div className="py-4">
          <h1>Home page</h1>
          <div className="table">
            <div className="table border shadow">
              <table className="table caption-top">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>first_name</th>
                    <th>last_name</th>
                    <th>address</th>
                    <th>mobile_no</th>
                    <th>pinCode</th>
                  </tr>
                </thead>
                <tbody>
                  {userData && userData.length > 0
                    ? userData.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.address}</td>
                            <td>{item.mobile_no}</td>
                            <td>{item.pinCode}</td>

                            <td>
                              <Link
                                className="btn btn-primary"
                                to={`/user/View/ ${item.id}`}
                              >
                                <i className="fa fa-eye"></i>
                              </Link>
                            </td>
                          </tr>
                        );
                      })
                    : "no data available"}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Home;

// Basic Hooks

// useState
// useEffect
// useContext
// Additional Hooks

// useReducer = the usereduse hook return the current state and a dispatch method.
// useCallback = the usecallback function return the memoized function.
// useMemo = they will prevent the unnessery calling .and usememo return the memoized value.
// useRef = when the re-render the value then value will not change.
// useImperativeHandle
// useLayoutEffect
// useDebugValue
