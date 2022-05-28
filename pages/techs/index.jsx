import { supabase } from "../../utils/supabase";
import TechCard from "../../components/TechCard";
import styles from "../../styles/techs.module.scss";
import { useQuery } from "react-query";

export default function Index() {
  const fetcher = async () => {
    const { data, error } = await supabase.from("tech").select();
    return data;
  };
  const { isLoading, data, isError } = useQuery("techs", fetcher);

  return (
    <div className={styles.container}>
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
  );
}
