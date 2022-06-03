import { supabase } from "./supabase";

export default async function (
  e,
  mydata,
  nowDate,
  myReviews,
  ratingValue,
  setMyReviews,
  setRatingError,
  setRatingValue
) {
  if (supabase.auth.session()) {
    if (ratingValue > 0) {
      setRatingError(false);

      const details = {
        name: supabase.auth.session().user.user_metadata.name,
        date: nowDate.toDateString(),
        rating: ratingValue,
        data: e.target.review.value,
      };

      const testArray = [...myReviews];
      const filtered = testArray.filter((item) => {
        if (item.name != supabase.auth.session().user.user_metadata.name) {
          return item;
        }
      });

      filtered.push(details);
      setMyReviews(filtered);

      try {
        e.target.review.value = "";
        setRatingValue(0);
        const { data, error } = await supabase
          .from("tech")
          .update({
            reviews: {
              data: filtered,
            },
          })
          .match({ id: mydata.id });
        if (data) {
          console.log("done", data);
        }
        if (error) {
          throw error;
        }
      } catch (error) {
        console.log("err", error);
      }
    } else {
      setRatingError(true);
    }
  } else {
    setLoggedError(true);
  }
}
