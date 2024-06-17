import {api} from "@/shared/api";
import {getImageUrl} from "@/shared/utils/image";
import {LocalTime} from "@/features/LocalTime";
import {Content} from "@/shared/ui/Content";

type Props = {
  params: { id: string }
}

export default async function Home({ params }: Props) {
  const response = await api.getPost(Number(params.id))

  const post = response.data

  return (
    <main className="container mx-auto grid grid-cols-6">
      <div className="lg:col-span-1"/>
      {post ? <div className="lg:col-span-4 col-span-6 lg:px-0 px-4">
        <div className="relative w-full overflow-hidden mb-5">
          <img src={getImageUrl(post.attributes.image)} width={300}
               alt={post.attributes?.title} className="w-full object-cover"/>
        </div>
        <div className="flex gap-5 items-center mb-3">
          <div className="text-yellow font-light">
            <LocalTime date={post?.attributes?.date || post?.attributes?.createdAt}/>
          </div>
        </div>
        <div className="text-2xl font-bold mb-3">{post.attributes?.title}</div>
        <div className="text-gray/70 pb-28">
          <Content content={post.attributes?.description}/>
        </div>
      </div> : null}
    </main>
  )
}