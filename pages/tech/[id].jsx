import styles from "../../styles/tech.module.scss";
import Image from "next/image";
import { useState } from "react";
import { supabase } from "../../utils/supabase";
import comment from "../../public/icons/comment.png";
import git from "../../public/icons/githublt.png";
import twitter from "../../public/icons/twitterlt.png";
import internet from "../../public/icons/internetlt.png";

export default function Index({ data }) {
  const [mydata, setData] = useState(data[0]);
  const [loggedError, setLoggedError] = useState();

  async function postComment(e) {
    e.preventDefault();
    const session = supabase.auth.session();
    if (session) {
      try {
        const { data, error } = await supabase
          .from("tech")
          .update({ reviews: { data: [{ name: "", review: "sucks" }] } })
          .match({ id: data.id });
        if (data) {
        }
        throw error;
      } catch (error) {
        console.log(error);
      }
    } else {
      setLoggedError(true);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.tech}>
        <div
          style={{
            backgroundColor: mydata.bg ? "rgb(234, 236, 250)" : "black",
          }}
          className={styles.tech__cover}
        >
          <div className={styles.image}>
            <img src={`${mydata.banner}`} alt="cover" />
          </div>
        </div>
        <div className={styles.tech__details}>
          <div className={styles.header}>
            <h2>{mydata.name}</h2>
            <p>{mydata.category}</p>
            <div className={styles.tags}>
              {mydata.tags.tags.map((item, key) => {
                return <p key={key}>{item}</p>;
              })}
            </div>
          </div>
          <div className={styles.details}>
            <p>{mydata.description}</p>
            <div className={styles.details__links}>
              {mydata.link && (
                <a rel="noreferrer" target="_blank" href={`${mydata.link}`}>
                  <span>
                    <Image
                      src={internet}
                      width={25}
                      height={25}
                      alt="internet"
                    />
                  </span>
                  <p>Website</p>
                </a>
              )}
              {mydata.repository && (
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={`${mydata.repository}`}
                >
                  <span>
                    <Image src={git} width={25} height={25} alt="git" />
                  </span>
                  <p>GitHub</p>
                </a>
              )}
              {mydata.twitter && (
                <a rel="noreferrer" target="_blank" href={`${mydata.twitter}`}>
                  <span>
                    <Image src={twitter} width={25} height={25} alt="twitter" />
                  </span>
                  <p>Twitter</p>
                </a>
              )}
            </div>
          </div>
        </div>
        <div className={styles.tech__reviews}>
          <div className={styles.count}>
            <Image src={comment} alt="reviews" width={25} height={25} />
            <h3>{mydata.reviews || 0}</h3>
            <p>Reviews</p>
          </div>
          {loggedError && <small>Please login to post a review!</small>}
          <form onSubmit={postComment} className={styles.post}>
            <input required={true} type="text" placeholder="Type your review" />
            <button type="submit">Post</button>
          </form>
          <div className={styles.comments}>
            {mydata.reviews ? (
              <div className={styles.comments__card}>
                <div className={styles.comments__hearder}>
                  <p>
                    by <span>Kwanele</span> 23 March 2021
                  </p>
                </div>
                <p>
                  Supabase is an open source Firebase alternative. Start your
                  project with a Postgres Database, Authentication, instant
                  APIs, Realtime subscriptions and Storage.
                </p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const { data, error } = await supabase
    .from("tech")
    .select()
    .eq("name", `${params.id}`);
  return {
    props: {
      data,
    },
  };
};
export const getStaticPaths = async () => {
  const { data, error } = await supabase.from("tech").select();

  const paths = data.map((item) => ({
    params: { id: item.name },
  }));

  return {
    paths,
    fallback: false,
  };
};
