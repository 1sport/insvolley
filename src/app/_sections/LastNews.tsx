import {Tag} from "@/shared/ui/Tag";
import {api} from "@/shared/api";
import {getImageUrl} from "@/shared/utils/image";
import {Post} from "@/shared/api/types";

export const LastNews = async () => {

  const data = await api.getPosts({
    limit: 6,
    filters: {
      main: false
    }
  })

  return (
    <div className="grid grid-cols-3 gap-5">
      {data?.data.map((item, index) =>
        <NewsItem key={index} post={item.attributes}  />
      )}
    </div>
  )
}

type ItemProps = {
  post: Post
}

const NewsItem = ({ post }: ItemProps) => {
  return (
    <div className="col-span-1 bg-primary-200 h-[200px] relative flex flex-col justify-end">
      <img src={getImageUrl(post?.image)}
           alt={""}
           className="absolute object-cover h-full w-full z-0"/>


      <div className="bg-primary-500/85 z-10 pt-3 pb-2 px-2 flex flex-col items-start">
        <Tag size="s"/>
        <h3 className="font-semibold text-xs line-clamp-2 mt-1">
          {post.title}
        </h3>
      </div>
    </div>
  )
}