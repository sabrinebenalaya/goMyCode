import React, { useEffect, useState } from "react";
import axios from "axios"
import UserCard from "./UserCard";
import './App.css';
function UserList() {
  const [dat, setDat] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios.get(url)
    .then((res)=>{
        setDat([...res.data])
     
    })
    .catch((e)=>{
        console.log(e)
    })
   
  }, []);

  return <div className="containerList">

  {dat.map((d)=>(
    <UserCard key={d.id} us={d}/>
  ))}
  </div>;
}

export default UserList;
