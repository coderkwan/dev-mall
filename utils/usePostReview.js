import { supabase } from "./supabase";

export default async function (id, mydata) {
  try {
    const { data, error } = await supabase
      .from("tech")
      .update({ reviews: { mydata } })
      .match({ id });
    if (data) {
      return "done";
    }
    throw error;
  } catch (error) {
    return error;
  }
}

/*

{
  "data": [
    {
      "name": "Kwanele",
      "data": "This tech sucs i don recomment at all",
      "date": "Sat May 28 2022",
      "stars": 3.5
    },
    {
      "name": "Zanele",
      "data": "This tech sucs i don recomment at all",
      "date": "Mon Feb 2 2022",
      "stars": 3
    },
    {
      "name": "Bobo",
      "data": "This tech sucs i don recomment at all",
      "date": "Sat March 23 2022",
      "stars": 4.5
    }
  ]
}

 */
