import React from "react";

function Card({
  item,
  cardValues,
  setCardValues,
  index,
  cartValue,
  setCartValue,
}) {
  const handleSubmit = (e) => {
    let itemCopy = { ...item };
    itemCopy.isSelected = !item.isSelected;
    let cardValuesCopy = [...cardValues];
    cardValuesCopy[index] = itemCopy;
    setCardValues(cardValuesCopy);
    if (item.isSelected) {
      setCartValue(cartValue - 1);
    } else {
      setCartValue(cartValue + 1);
    }
  };

  return (
    <>
      <div className="card text-center">
        <div>
          <img
            style={{ height: "190px" }}
            src="https://media.wired.com/photos/5c9040ee4950d24718d6da99/1:1/w_1800,h_1800,c_limit/shoppingcart-1066110386.jpg"
            className="card-img-top"
            alt="Shopping Item"
          />
          <div className="card-body">
            <h5 className="card-title">
              {" "}
              <strong>{item.title}</strong>
            </h5>
            <p className="card-text">{item.price}</p>

            <div className="container d-flex justify-content-center ">
              {!item.isSelected ? (
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={handleSubmit}
                >
                  Add to Cart
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={handleSubmit}
                >
                  Remove frorm Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
