import { supabase } from "../../utils/supabase";
import TechCard from "../../components/TechCard";
import styles from "../../styles/techs.module.scss";

export default function Index({ data }) {
  return (
    <div className={styles.container}>
      {data && (
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
      )}
    </div>
  );
}

export const getStaticProps = async () => {
  const { data, error } = await supabase.from("tech").select();
  return {
    props: {
      data,
    },
  };
};
