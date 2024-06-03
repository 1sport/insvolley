import Image from "next/image";
import {Tag} from "@/shared/ui/Tag";
import ArrowRight from "@/shared/images/arrow.svg";

export const LastNews = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </div>
  )
}

const NewsItem = () => {
  return (
    <div className="col-span-1 bg-primary-200 h-[200px] relative flex flex-col justify-end">
      <Image src="/tmp-news.png" fill alt="image" quality={100} style={{ objectFit: 'cover' }} />


      <div className="bg-primary-500/85 z-10 pt-3 pb-2 px-2 flex flex-col items-start">
        <Tag size="s" />
        <h3 className="font-semibold text-xs line-clamp-2 mt-1">
          Первые волейбольные клубы в Казахстане появились в 1928 году.
        </h3>
      </div>
    </div>
  )
}