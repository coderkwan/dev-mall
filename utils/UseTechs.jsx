import { useQuery } from "react-query";
import styles from "../styles/techs.module.scss";
import TechCard from "../components/TechCard";
import { allTechFetcher } from "./supabase";

export default function UseTechs() {
  const { data } = useQuery("techs", allTechFetcher);

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {data ? (
          data && (
            <div
              style={{
                display: "flex",
                gap: 30,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {data.length > 0 &&
                data.map((item, index) => {
                  return <TechCard data={item} key={index} />;
                })}
            </div>
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
