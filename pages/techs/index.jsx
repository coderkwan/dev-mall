import { supabase } from "../../utils/supabase";
import { useEffect, useState } from "react";
import TechCard from "../../components/TechCard";

export default function index() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("tech").select();
      if (data) {
        setData(data);
        console.log(data);
      }
      throw error;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {!loading ? (
        <div>
          {data.length > 0 &&
            data.map((item, index) => {
              return <TechCard id={item.id} key={index} />;
            })}
        </div>
      ) : (
        <p>loading....</p>
      )}
    </div>
  );
}
