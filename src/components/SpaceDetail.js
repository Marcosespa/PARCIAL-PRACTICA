import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchRooms } from "../api";
import { useTranslation } from "react-i18next";

const SpaceDetail = () => {
  const {id}= useParams();
  const [rooms, setRooms]= useState([]);
  const { t } = useTranslation();

  useEffect (() => {
    fetchRooms().then((data) => setRooms(data.filter((room)=> room.homeId === id)));
  },[id]);
  
  return(
<div>

  <h2>{t("spaceDetail.name")}</h2>
  {rooms.map((room)=>(
    <Link key = {room.id} to={`/room/${room.id}`} className="card">
      <h4>{room.name}</h4>
    </Link>
  ))}
</div>
  )
};

export default SpaceDetail;