import styles from "./styles/techcard.module.scss";
import Image from "next/image";
import comment from "../public/icons/comment.png";
import { useRouter } from "next/router";
import { useState } from "react";

function TechCard({ data }) {
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
        <div className={styles.card__review}>
          <Image src={comment} width={20} height={20} alt="reviws" />
          <p>
            <span>{data.reviews || 0}</span> reviews
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
