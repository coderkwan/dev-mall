import styles from "../../styles/profile.module.scss";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";
import { useRouter } from "next/dist/client/router";

export default function index() {
  const router = useRouter();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  async function logout() {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      if (!error) {
        router.reload();
      }
      throw error;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  // async function deleteAccount() {
  //   try {
  //     setLoading(true);
  //     const { data: user, error } = await supabase.auth.api.deleteUser(
  //       `${data.identities[0].id}`
  //     );
  //     if (!error) {
  //       router.reload();
  //     }
  //     throw error;
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  async function fetchUser() {
    try {
      const user = supabase.auth.user();
      if (user) {
        setData(user);
        console.log(data);
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

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.intro}>
          {data && (
            <h4>
              Hello <span>{data.user_metadata.name}</span>, I hope you're good!
            </h4>
          )}
        </div>
        <div className={styles.btns}>
          <button onClick={logout}>{loading ? "Loading..." : "Logout"}</button>
          {/* <button onClick={deleteAccount}>Terminate account</button> */}
        </div>
      </div>
    </div>
  );
}
