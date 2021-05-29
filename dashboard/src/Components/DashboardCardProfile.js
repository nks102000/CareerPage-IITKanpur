import React from "react";
import "../css/DashboardCardProfile.css";
import img from "../images/logo192.png";

function DashboardCardProfile(imageUrl) {
  return (
    <>
      <div className="card-container-dashboard">
        <div className="image-container">
          <img src={img} alt="" />
        </div>
        <div className="card-title-dashboard">
          <h2>Tony Stark</h2>
        </div>
        <div className="card-body-dashboard">
        <center>
          <p>Owner of Starks Foundation and taking our services since 2005.</p>
          </center>
        </div>
      </div>
    </>
  );
}

export default DashboardCardProfile;
