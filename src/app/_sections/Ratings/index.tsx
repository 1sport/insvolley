import {api} from "@/shared/api";
import {RatingsList} from "@/app/_sections/Ratings/RatingsList";

type Props = {
  type: string
}

export const Ratings = async ({type}:Props) => {
  const data = await api.getRatings({
    filters: {
      type: type  === "woman" ? "Женщины" : "Мужчины"
    }
  })
  console.log(JSON.stringify(data))
  return <RatingsList data={data.data} />
}