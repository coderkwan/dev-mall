import styles from "../../styles/tech.module.scss";
import Image from "next/image";
import { useState } from "react";
import { supabase } from "../../utils/supabase";
import comment from "../../public/icons/comment.png";
import uploadComment from "../../utils/usePostReview";
import { Rating } from "react-simple-star-rating";
import Review from "../../components/Review";
import Links from "../../components/Links";
import { useEffect } from "react";

export default function Index({ data }) {
  const nowDate = new Date();
  const [mydata, setData] = useState(data[0]);
  const [loggedError, setLoggedError] = useState(false);
  const [ratingError, setRatingError] = useState(false);
  const [myReviews, setMyReviews] = useState(
    mydata.reviews ? mydata.reviews.data : []
  );
  const [myArr, setMyArr] = useState([]);
  const [ratingValue, setRatingValue] = useState(0);

  const handleRating = (rate) => {
    console.log(rate / 20);
  };

  async function postComment(e) {
    e.preventDefault();
    const session = supabase.auth.session();

    if (session) {
      if (ratingValue === 0) {
        setRatingError(true);
      } else {
        setRatingError(false);
        const date = nowDate.toDateString();
        // await uploadComment()
      }
    } else {
      setLoggedError(true);
    }
  }

  useEffect(() => {
    myReviews.map((item) => {
      setMyArr([...myArr, item.stars]);
    });
  }, []);

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
            <Links mydata={mydata} />
            <div className={styles.count}>
              <Image src={comment} alt="reviews" width={25} height={25} />
              <h3>{mydata.reviews ? mydata.reviews.data.length : 0}</h3>
              <p>Reviews</p>
              <Rating
                initialValue={
                  myArr.reduce((partialSum, a) => partialSum + a, 0) /
                  myArr.length
                }
                emptyColor="rgb(26, 26, 68)"
                size={25}
                readonly={true}
              />
            </div>
          </div>
        </div>
        <div className={styles.tech__reviews}>
          {loggedError && <small>Please login to post a review!</small>}
          <Rating
            showTooltip
            transition
            size={25}
            onClick={handleRating}
            ratingValue={ratingValue}
            emptyColor="rgb(26, 26, 68)"
            tooltipArray={["Terrible", "Bad", "Average", "Great", "Prefect"]}
          />
          {ratingError && <small>Please select your rating!</small>}
          <form onSubmit={postComment} className={styles.post}>
            <input required={true} type="text" placeholder="Type your review" />
            <button type="submit">Post</button>
          </form>
          <div className={styles.comments}>
            {myReviews.length > 0 ? (
              myReviews.map((item, key) => {
                return <Review item={item} />;
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// export const getStaticProps = async ({ params }) => {
//   const { data, error } = await supabase
//     .from("tech")
//     .select()
//     .eq("name", `${params.id}`);
//   return {
//     props: {
//       data,
//     },
//   };
// };
export const getServerSideProps = async ({ params }) => {
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

// export const getStaticPaths = async () => {
//   const { data, error } = await supabase.from("tech").select();

//   const paths = data.map((item) => ({
//     params: { id: item.name },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
