import styles from "./styles/techcard.module.scss";
import Image from "next/image";
import comment from "../public/icons/comment.png";

function TechCard() {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}></div>
      <div className={styles.card__hearder}>
        <h4>Supabase</h4>
        <div className={styles.card__review}>
          <Image src={comment} width={20} height={20} alt="reviws" />
          <p>
            <span>23</span> reviews
          </p>
        </div>
      </div>
      <div className={styles.card__category}>
        <p>Object Relational Mapping</p>
      </div>
      <p>
        Prisma helps app developers build faster and make fewer errors with an
        open source database toolkit for PostgreSQL, MySQL, SQL Server, SQLite,
        MongoDB and CockroachDB.
      </p>
      <div className={styles.card__tags}>
        <div className={styles.card__tag}>
          <p>JavaScript</p>
        </div>
        <div className={styles.card__tag}>
          <p>Storage</p>
        </div>
        <div className={styles.card__tag}>
          <p>ORM</p>
        </div>
      </div>
    </div>
  );
}

export default TechCard;
