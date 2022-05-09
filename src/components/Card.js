import React from "react";

function Card(props) {
  return (
    <>
      <div className="card text-center"
      //  style={{ width: "18rem" }}
       >
        <div>
          <img
            style={{ height: "190px" }}
            src="https://media.wired.com/photos/5c9040ee4950d24718d6da99/1:1/w_1800,h_1800,c_limit/shoppingcart-1066110386.jpg"
            className="card-img-top"
            alt="Shopping Item"
          />
          <div className="card-body">
            <h5 className="card-title"> <strong>{props.title}</strong></h5>
            <p className="card-text">{props.price}</p>

            <div className="container d-flex justify-content-center ">
              {/* <div> */}
                <button type="button" className="btn btn-outline-dark">
                  Add to Cart
                </button>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
