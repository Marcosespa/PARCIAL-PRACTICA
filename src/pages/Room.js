import React from "react";
import RoomDetail from "../components/RoomDetail";
import { useParams } from "react-router-dom";


const Room =()=>{
  const {id} = useParams();
  return <RoomDetail id={id}/>;
};

export default Room;