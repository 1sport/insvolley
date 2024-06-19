import {api} from "@/shared/api";
import {RatingsList} from "@/app/_sections/Ratings/RatingsList";
import {Skeleton} from "@/shared/ui/Skeleton";

type Props = {
  type: string
}

export const Ratings = async ({type}:Props) => {
  const data = await api.getRatings({
    filters: {
      type: type  === "woman" ? "Женщины" : "Мужчины"
    }
  })

  return <RatingsList data={data.data} />
}

function RatingsSkeleton() {
  return (
    <Skeleton className="h-[452px]" />
  )
}

Ratings.Skeleton = RatingsSkeleton