import React from "react";
import styles from "../styles/tech.module.scss";
import { Rating } from "react-simple-star-rating";

function Review({ item }) {
  return (
    <div className={styles.comments__card}>
      <div className={styles.comments__hearder}>
        <div className={styles.ratings}>
          <Rating
            initialValue={item.stars}
            emptyColor="rgb(26, 26, 68)"
            size={25}
            readonly={true}
          />
        </div>
        <p>
          by <span>{item.name}</span> {item.date}
        </p>
      </div>
      <p>{item.data}</p>
    </div>
  );
}

export default Review;
