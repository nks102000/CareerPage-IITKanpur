import React from "react";
import "../css/DashboardCardutils.css";

function DasshboardCardutils({ title, imageSrc, value }) {
  return (
    <>
      <div className="card-container-utils">
        <div className="image-container-utils">
          {imageSrc}
        </div>
        <div className="card-title-utils">
          <h2>{title}</h2>
        </div>
        <div className="card-body-utils">
          <h3>{value}</h3>
        </div>
      </div>
    </>
  );
}

export default DasshboardCardutils;
