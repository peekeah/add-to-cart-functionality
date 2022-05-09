import React, { useState } from "react";
import Card from "./Card";

function Dashboard({cartValue, setCartValue}) {
  const [cardValues, setCardValues] = useState([
    { cardId: 1, title: "Fancy Product", price: "$40.00 - $80.00" , isSelected: false },
    { cardId: 2, title: "Special Item", price: "$18.00" , isSelected: false },
    { cardId: 3, title: "Sale Item", price: "$25.00" , isSelected: false },
    { cardId: 4, title: "Popular Item", price: "$40.00" , isSelected: false },
    { cardId: 5, title: "Fancy Product", price: "$120.00 - $280.00" , isSelected: false },
    { cardId: 6, title: "Special Item", price: "18.00" , isSelected: false },
    { cardId: 7, title: "Popular Item", price: "$40.00" , isSelected: false },
    { cardId: 8, title: "Special Item", price: "18.00" , isSelected: false },
  ]);

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
        {cardValues.map((item, index) => (
          <div className="col-3 pt-5" key={item.cardId}>
            <Card
              cardValues = {cardValues}
              setCardValues={setCardValues}
              isSelected={item.isSelected}
              item={item}
              index={index}
              cartValue={cartValue}
              setCartValue={setCartValue}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Dashboard;
