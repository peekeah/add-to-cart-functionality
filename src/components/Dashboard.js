import React from "react";
import Card from "./Card";

function Dashboard() {
  return (
    <>
      <div
        className="container-fluid bg-dark text-light d-flex flex-column justify-content-center align-items-center"
        style={{ height: "32vh" }}
      >
        <p style={{ fontSize: "55px", margin: 0 }}>
          <strong>Shop in style</strong>
        </p>
        <p style={{ fontSize: "20px", color: "#ffffff80" }}>
          With this shop hompeage template
        </p>
      </div>
      <div className="container row mx-auto mt-5 pb-5">
        <div className="col-3 pt-5">
          <Card title="Fancy Product" price="$40.00 - $80.00" />
        </div>
        <div className="col-3 pt-5">
          <Card title="Special Item" price="$18.00" />
        </div>
        <div className="col-3 pt-5">
          <Card title="Sale Item" price="$25.00" />
        </div>
        <div className="col-3 pt-5">
          <Card title="Popular Item" price="$40.00" />
        </div>
        <div className="col-3 pt-5">
          <Card title="Sale Item" price="$25.00" />
        </div>
        <div className="col-3 pt-5">
          <Card title="Fancy Product" price="$120.00 - $280.00" />
        </div>
        <div className="col-3 pt-5">
          <Card title="Special Item" price="18.00" />
        </div>
        <div className="col-3 pt-5">
          <Card title="Popular Item" price="$40.00" />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
