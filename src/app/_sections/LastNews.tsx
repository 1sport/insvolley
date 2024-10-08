import {api} from "@/shared/api";
import {getImageUrl} from "@/shared/utils/image";
import {Post} from "@/shared/api/types";
import Link from "next/link";
import {Skeleton} from "@/shared/ui/Skeleton";

const LastNews = async () => {

  const data = await api.getPosts({
    limit: 6,
    filters: {
      main: false
    }
  })

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {data?.data.map((item, index) =>
        <NewsItem key={index} post={item.attributes} id={item.id}  />
      )}
    </div>
  )
}

type ItemProps = {
  post: Post
  id: number
}

export const NewsItem = ({ post, id }: ItemProps) => {
  return (
    <Link href={`/news/${id}`} className="col-span-1 bg-primary-200 h-[232px] relative flex flex-col justify-end">
      <img src={getImageUrl(post?.image)}
           alt={""}
           className="absolute object-cover h-full w-full z-0"/>
      <div className="bg-primary-500/85 z-10 pt-2 pb-2 px-2 flex flex-col items-start">
        <h3 className="font-semibold text-xs line-clamp-2 mt-1">
          {post.title}
        </h3>
      </div>
    </Link>
  )
}

function NewsSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-5">
      <Skeleton className="col-span-1 h-[232px]" />
      <Skeleton className="col-span-1 h-[232px]" />
      <Skeleton className="col-span-1 h-[232px]" />
      <Skeleton className="col-span-1 h-[232px]" />
      <Skeleton className="col-span-1 h-[232px]" />
      <Skeleton className="col-span-1 h-[232px]" />
    </div>
  )
}

LastNews.Skeleton = NewsSkeleton;

export { LastNews }