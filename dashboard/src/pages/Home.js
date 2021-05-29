import React from "react";
import "../css/Home.css";
import DasdboardCardProfile from "../Components/DashboardCardProfile";
import DashboardCardUtils from "../Components/DashboardCardutils";
import * as HeroIcons from "react-icons/hi";
import img from "../images/logo192.png";
import DasshboardCardutils from "../Components/DashboardCardutils";
import * as ReactBootstrap from "react-bootstrap";
import { AiFillDashboard } from "react-icons/ai";

function Home() {
  const orders = [
    {
      name: "Abc",
      address: "XYZ",
      type: "PQR",
      date: "25-12-2020",
      status: "Delevered",
    },
    {
      name: "Abc",
      address: "XYZ",
      type: "PQR",
      date: "25-12-2020",
      status: "Delevered",
    },
    {
      name: "Abc",
      address: "XYZ",
      type: "PQR",
      date: "25-12-2020",
      status: "Delevered",
    },
    {
      name: "Abc",
      address: "XYZ",
      type: "PQR",
      date: "25-12-2020",
      status: "Delevered",
    },
    {
      name: "Abc",
      address: "XYZ",
      type: "PQR",
      date: "25-12-2020",
      status: "Delevered",
    },
  ];

  const renderOrder = (orders, index) => {
    return (
      <tr>
        <td>{orders.name}</td>
        <td>{orders.address}</td>
        <td>{orders.type}</td>
        <td>{orders.date}</td>
        <td>{orders.status}</td>
      </tr>
    );
  };

  return (
    <>
      <div className="dashboard-header">
        <AiFillDashboard className="dashboard-icon"/>
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard-container-top">
        <DasdboardCardProfile />
        <DashboardCardUtils
          title="Wallet Balance"
          imageSrc={<HeroIcons.HiOutlineCurrencyRupee />}
          value="Rs.10000.00"
        />
        <DasshboardCardutils
          title="Total Orders"
          imageSrc={<HeroIcons.HiOutlineShoppingCart />}
          value="263 units"
        />
      </div>

      <div className="dashboard-container-table">
        <h2>Recent Orders</h2>
        <div className="recent-orders-list-dashboard">
          <ReactBootstrap.Table bordered responsive>
            <thead>
              <tr>
                <th>Name of Product</th>
                <th>Address of Shipment</th>
                <th>Type of Shipment</th>
                <th>Date of Shipment</th>
                <th>Status of Shipment</th>
              </tr>
            </thead>
            <tbody>{orders.map(renderOrder)}</tbody>
          </ReactBootstrap.Table>
        </div>
      </div>
    </>
  );
}

export default Home;
