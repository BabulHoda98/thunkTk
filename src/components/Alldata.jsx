import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteusers, getusers } from "../store/thunk/fetchUser";
import ListGroup from "react-bootstrap/ListGroup";
import Mymodal from "./Mymodal";
import { useNavigate } from "react-router-dom";


function Alldata() {
let [show,setShow]=useState(false);
let [getid,setgetid]=useState(null);

let dispatch = useDispatch();

let { isLoading, data, error } = useSelector(state => state.usersData);
// console.log(data,isLoading,error);

useEffect(() => {
    dispatch(getusers());
}, [dispatch]);

let navigate=useNavigate()
let navToUpdate=(para)=>{
  navigate(`/update/${para.id}`)
}

let deletehandler=(para)=>{
  console.log(para);
  dispatch(deleteusers(para))
}

return (
    <>
    {
      show?
      <Mymodal setShow={setShow} getid={getid} data={data}/>
      :
      <ListGroup>
        {
          data  && data.map((ele) => (
            <ListGroup.Item key={ele.id}>
              <div className="w-50 m-auto border border-success border-5 p-3 rounded-4">
                <h1 className="text-center">Name-{ele.name}</h1>
                <h2 className="text-center">Email-{ele.email}</h2>
                <h3 className="text-center">Password-{ele.password}</h3>

                <div className="w-75 a-auto">
                  <a className="mx-3" href="#" onClick={()=>navToUpdate(ele)}>Edit </a>
                  <a className="mx-3" href="#" onClick={()=>[setShow(true),setgetid(ele.id)]}>View</a>
                  <a className="mx-3" href="#" onClick={()=>deletehandler(ele)}>Delete</a>
                </div>
              </div>
            </ListGroup.Item>
          ))
          }
      </ListGroup>
    }
    </>
  );
}
export default Alldata;
