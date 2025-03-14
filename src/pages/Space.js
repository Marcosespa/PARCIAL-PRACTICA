import React from "react";
import SpaceDetail from "../components/SpaceDetail";
import { useParams } from "react-router-dom";


const Space =()=>{
  const {id} = useParams();
  return <SpaceDetail id={id}/>;
};

export default Space;