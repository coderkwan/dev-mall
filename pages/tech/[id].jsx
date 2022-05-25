import styles from "../../styles/techs.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { supabase } from "../../utils/supabase";

export default function index() {
  const router = useRouter();
  const [data, setData] = useState();

  async function fetchData() {
    try {
      const { data, error } = await supabase
        .from("tech")
        .select()
        .eq("id", router.query.id);
      if (data) {
        console.log(data);
        setData(data[0]);
      }
      throw error;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {data ? <h1>{data.name}</h1> : <p>Loading...</p>}
      </div>
    </div>
  );
}
