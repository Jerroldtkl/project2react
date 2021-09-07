import React from "react";
import Images from "./Images";
import styles from "./Data.module.css";
import { link } from "react-router-dom";

function DataDisplay(props) {
  const displayArr = props.data.slice(0, 5);
  // console.log("display", displayArr);

  return (
    <div className="container">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">address</th>
            <th scope="col">Images</th>
          </tr>
        </thead>
        <tbody>
          {displayArr.map((details, id) => {
            // console.log("images details", details.images);
            return (
              <tr>
                <th scope="row">
                  <p>{details.name}</p> <p>{details.reviews[0].text}</p>
                </th>
                <th scope="row">
                  <p>{details.address.streetName}</p>
                  <p>{details.address.buildingName}</p>
                  <p>
                    #{details.address.floorNumber}-{details.address.unitNumber}
                  </p>
                  <p>S{details.address.postalCode} </p>
                </th>
                <Images images={details.images} />
              </tr>
            );
          })}
          <button>next Page</button>
        </tbody>
      </table>
    </div>
  );
}

export default DataDisplay;
