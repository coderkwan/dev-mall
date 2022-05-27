import { supabase } from "../../utils/supabase";
import { useEffect, useState } from "react";
import TechCard from "../../components/TechCard";
import { useQuery } from "react-query";

export default function index() {
  const [mydata, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  function fetchData() {
    return supabase.from("tech").select();
  }
  const { isLoading, data, isError } = useQuery("techs", fetchData);

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {data.data.length > 0 &&
            data.data.map((item, index) => {
              return <TechCard id={item.id} key={index} />;
            })}
        </div>
      ) : isLoading ? (
        <p>loading....</p>
      ) : isError ? (
        <p>Error</p>
      ) : (
        <></>
      )}
    </div>
  );
}
