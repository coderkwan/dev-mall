import styles from "../../styles/post.module.scss";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";

function index() {
  const router = useRouter();

  useEffect(() => {
    const session = supabase.auth.session();
    if (!session) {
      router.push("/login");
    }
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form action="">
          <div className={styles.inputAndLabel}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.inputAndLabel}>
            <label htmlFor="">Description</label>
            <textarea rows={3} type="text" name="description" />
          </div>
          <div className={styles.inputAndLabel}>
            <label htmlFor="">Cartegory</label>
            <input type="text" name="category" />
          </div>
          <div className={styles.inputAndLabel}>
            <label htmlFor="">Tags</label>
            <input type="text" name="tag" />
          </div>
          <div className={styles.inputAndLabel}>
            <label htmlFor="">Logo</label>
            <input type="file" name="logo" />
          </div>
          <div className={styles.inputAndLabel}>
            <label htmlFor="">Banner</label>
            <input type="file" name="banner" />
          </div>
          <button>Post</button>
        </form>
      </div>
    </div>
  );
}

export default index;
