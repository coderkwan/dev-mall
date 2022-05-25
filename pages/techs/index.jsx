import { supabase } from "../../utils/supabase";
import { useEffect, useState } from "react";
import TechCard from "../../components/TechCard";
import { useRouter } from "next/dist/client/router";

export default function index() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [logged, setLogged] = useState(false);
  const router = useRouter();

  async function fetchData() {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("tech").select();
      if (data) {
        console.log(data);
        setData(data);
      }
      throw error;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      return;
    }
  }
  // async function checkSession() {
  //   try {
  //     setLoading(true);
  //     const session = supabase.auth.session();
  //     if (session) {
  //       setLogged(true);
  //       return true;
  //     }
  //     return false;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    // checkSession();
    // if (logged) {
    fetchData();
    // } else {
    //   router.push("/login");
    // }
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
