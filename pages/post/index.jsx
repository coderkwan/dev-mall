import styles from "../../styles/post.module.scss";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";

function index() {
  const router = useRouter();
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  async function recommend(e) {
    e.preventDefault();
    setDone(false);
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("recommendation")
        .insert([
          { name: e.target.name.value, website: e.target.website.value },
        ]);
      if (data) {
        setDone(true);
      }
      throw error;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const session = supabase.auth.session();
    if (!session) {
      router.push("/login");
    } else {
      setChecked(true);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      {checked ? (
        <div className={styles.container}>
          <h3>Recommed a Library or framework or technology we should list.</h3>
          <form onSubmit={recommend}>
            <div className={styles.inputAndLabel}>
              <label htmlFor="">Name</label>
              <input required={true} type="text" name="name" />
            </div>
            <div className={styles.inputAndLabel}>
              <label htmlFor="">Website</label>
              <input required={true} type="url" name="website" />
            </div>
            {done && <p>Recommendation submited sucessfully!</p>}
            <button type="submit">{loading ? "Loading..." : "Submit"}</button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default index;
