import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";
import { useRouter } from "next/dist/client/router";

export default function index() {
  const [data, setData] = useState();
  const router = useRouter();

  async function fetchUser() {
    try {
      const user = supabase.auth.user();
      if (user) {
        setData(user);
      }
    } catch (error) {
      console.log(err);
    }
  }
  useEffect(() => {
    const session = supabase.auth.session();
    if (!session) {
      router.push("/login");
    } else {
      fetchUser();
    }
  }, [data]);

  return <div>{data && <p>Heloo dude</p>}</div>;
}
