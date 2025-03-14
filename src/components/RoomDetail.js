import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRooms } from "../api";
import { useTranslation } from "react-i18next";

const RoomDetail =()=>{
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    fetchRooms().then((data) => {
      const foundRoom = data.find((r) => String(r.id) === String(id)); // Convertir id a string para comparación segura
      setRoom(foundRoom || null);
    });
  }, [id]);


  if (!room) {
    return <h2>{t("roomDetail.loading")}</h2>; 
  }
  return (
    <div>
      <h2>{t("roomDetail.name")}</h2>
      {room && (
        <div>
          <h3>{room.name}</h3>
          <ul>
            {room.devices.map((device) => (
              <li key={device.id}>{device.name}: {device.value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

};

export default RoomDetail;