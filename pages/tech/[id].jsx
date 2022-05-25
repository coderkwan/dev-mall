import styles from "../../styles/tech.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { supabase } from "../../utils/supabase";
import comment from "../../public/icons/comment.png";
import git from "../../public/icons/githublt.png";
import twitter from "../../public/icons/twitterlt.png";
import internet from "../../public/icons/internetlt.png";

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
      <div className={styles.tech}>
        <div className={styles.tech__cover}>
          <div className={styles.image}></div>
        </div>
        <div className={styles.tech__details}>
          <div className={styles.header}>
            <h2>Supabase</h2>
            <p>Object Relational Mapping</p>
            <div className={styles.tags}>
              <p>Database</p>
              <p>Storage</p>
              <p>ORM</p>
            </div>
          </div>
          <div className={styles.details}>
            <p>
              Supabase is an open source Firebase alternative. Start your
              project with a Postgres Database, Authentication, instant APIs,
              Realtime subscriptions and Storage.
            </p>
            <div className={styles.details__links}>
              <a href="/">
                <span>
                  <Image src={internet} width={25} height={25} />
                </span>
                <p>Website</p>
              </a>
              <a href="/">
                <span>
                  <Image src={git} width={25} height={25} />
                </span>
                <p>GitHub</p>
              </a>
              <a href="/">
                <span>
                  <Image src={twitter} width={25} height={25} />
                </span>
                <p>Twitter</p>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.tech__reviews}>
          <div className={styles.count}>
            <Image src={comment} alt="reviews" width={25} height={25} />
            <h3>3</h3>
            <p>Reviews</p>
          </div>
          <div className={styles.post}>
            <input type="text" placeholder="Type your review" />
            <button>Post</button>
          </div>
          <div className={styles.comments}>
            <div className={styles.comments__card}>
              <div className={styles.comments__hearder}>
                <p>
                  by <span>Kwanele</span> 23 March 2021
                </p>
              </div>
              <p>
                Supabase is an open source Firebase alternative. Start your
                project with a Postgres Database, Authentication, instant APIs,
                Realtime subscriptions and Storage.
              </p>
            </div>
            <div className={styles.comments__card}>
              <div className={styles.comments__hearder}>
                <p>
                  by <span>Kwanele</span> 23 March 2021
                </p>
              </div>
              <p>
                Supabase is an open source Firebase alternative. Start your
                project with a Postgres Database, Authentication, instant APIs,
                Realtime subscriptions and Storage.
              </p>
            </div>
            <div className={styles.comments__card}>
              <div className={styles.comments__hearder}>
                <p>
                  by <span>Kwanele</span> 23 March 2021
                </p>
              </div>
              <p>
                Supabase is an open source Firebase alternative. Start your
                project with a Postgres Database, Authentication, instant APIs,
                Realtime subscriptions and Storage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
