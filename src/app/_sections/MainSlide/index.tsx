import {FC} from "react";
import {api} from "@/shared/api";
import {Slide} from "@/app/_sections/MainSlide/Slide";

export const MainSlide: FC = async () => {

  const data = await api.getPosts({
    limit: 6,
    filters: {
      main: true
    }
  })

  return <Slide data={data.data} />
}