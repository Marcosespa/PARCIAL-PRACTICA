import React, { useEffect } from "react";
import { Link } from "react-router-dom";  
import { fetchSpaces } from "../api";
import {useTranslation} from "react-i18next"; 
import "../styles/Dashboard.css"

const Dashboard = () => {
  const [spaces, setSpaces]= React.useState([]);
  const { t } = useTranslation();

  useEffect(() => {
  fetchSpaces().then(setSpaces);
  },[]);

  return (
    <div>
    <h1>{t("dashboard.title")}</h1>
    <div className="gallerry">
      {spaces.map((space) => (
      <Link key={space.id} to={`/space/${space.id}`} className="card">
        <img src={space.type === "house" ? "/house-icon.png" : "/apartment-icon.png"} alt={space.name} />
        <h3> {space.name}</h3>
        <p>{space.address}</p>
    </Link>
    ))}
    </div>
    </div>
  )
};

export default Dashboard;