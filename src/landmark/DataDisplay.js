import React from "react";
import Images from "./Images";
import styles from "./Data.module.css";
import { link } from "react-router-dom";

function DataDisplay(props) {
  const displayArr = props.data.slice(0, 5);
  // console.log("display", displayArr);

  let content = "";

  if (displayArr.length > 1) {
    content = (
      <tr>
        <th scope="col">name</th>
        <th scope="col">address</th>
        <th scope="col">Images</th>
      </tr>
    );
  }

  return (
    <div className="container">
      <table class="table table-dark">
        <thead>{content}</thead>
        <tbody className={styles.fontFamily}>
          {displayArr.map((details, id) => {
            // console.log("images details", details.images);
            return (
              <tr>
                <th scope="row">
                  <p className={styles.font}>{details.name}</p>{" "}
                  <p>{details.reviews[0].text}</p>
                  <p>
                    <a
                      className={styles.fontLink}
                      href={details.officialWebsite}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {details.officialWebsite}
                    </a>
                  </p>
                </th>
                <th scope="row">
                  <h3>{details.address.streetName}</h3>
                  <p>{details.address.buildingName}</p>
                  <p>
                    #{details.address.floorNumber}-{details.address.unitNumber}
                  </p>
                  <p>S({details.address.postalCode}) </p>
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
