import styles from "./styles/techcard.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";

function TechCard({ data }) {
  const [myReviews, setMyReviews] = useState(
    data.reviews ? data.reviews.data : []
  );
  const [myArr, setMyArr] = useState([]);

  useEffect(() => {
    const listed = [];
    myReviews.map((item) => {
      listed.push(item.rating);
    });
    setMyArr(listed);
  }, []);

  const [mylist, setList] = useState(data.tags.tags);
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/tech/${data.name}`);
      }}
      className={styles.card}
    >
      <div
        style={{
          backgroundColor: data.bg ? "rgb(234, 236, 250)" : "black",
        }}
        className={styles.card__image}
      >
        <img src={`${data.banner}`} alt="" />
      </div>
      <div className={styles.card__hearder}>
        <h4>{data.name}</h4>
        <Rating
          initialValue={
            myArr.length > 0
              ? myArr.reduce((partialSum, a) => partialSum + a, 0) /
                myArr.length
              : 0
          }
          emptyColor="rgb(26, 26, 68)"
          size={25}
          readonly={true}
        />
        <div className={styles.card__review}>
          <p>
            <span>{data.reviews ? data.reviews.data.length : 0}</span> reviews
          </p>
        </div>
      </div>
      <div className={styles.card__category}>
        <p>{data.category}</p>
      </div>
      <p>{data.description}</p>
      <div className={styles.card__tags}>
        {mylist.map((item, key) => {
          return (
            <div key={key} className={styles.card__tag}>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TechCard;
