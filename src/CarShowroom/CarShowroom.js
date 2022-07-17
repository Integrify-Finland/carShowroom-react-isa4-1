import React, { useState } from "react";
import dataFeatures from "../Data/arrayFeatures.json";

export default function CarShowroom() {
  const [currentCar, setCurrentCar] = useState({
    id: 1,
    title: "Crystal Black",
    type: "Pearl",
    img: "./carbasic/icons/icon-black.jpg",
    srcImg: "./carbasic/products/black-car.jpg",
    color: "Black",
    price: "19,550",
    engineType: "In-Line 4-Cylinder",
    displacement: "1996 cc",
    horsepower: "158 @ 6500 rpm",
    torque: "138 lb-ft @ 4200 rpm",
    redline: "6700 rpm",
  });

  const changeCurrentCar = (newCar) => {
    return setCurrentCar(newCar);
  };

  const renderIcon = (arrayFeatures) => {
    return arrayFeatures.map((item, index) => {
      return (
        <div   
        key={index}
          className="row border border-link pt-2 pb-2 mt-2"
          style={{ cursor: "pointer" }}
        >
          <img
            className="col-2"
            src={item.img}
            alt={item.title}
            onClick = {() =>{ changeCurrentCar(item)} }
          />
          <div className="col-10">
            <h3>{item.title}</h3>
            <p>{item.type}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-7">
          <img
            style={{ width: "100%" }}
            src={currentCar.srcImg}
            alt={currentCar.title}
          />
        </div>
        <div className="col-5">
          <div className="card text-dark">
            <div className="card-header text-primary">Exterior Color</div>
            <div className="card-body">{renderIcon(dataFeatures)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
