import styles from "../../styles/techs.module.scss";
import TechCard from "../../components/TechCard";

export default function index() {
  const myNumber = [1, 2, 3, 4, 5];
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {myNumber.map((item, key) => {
          return <TechCard key={key} />;
        })}
      </div>
    </div>
  );
}
