import {api} from "@/shared/api";
import {NewsItem} from "@/app/_sections/LastNews";

export default async function NewsPage() {
  const response = await api.getPosts({
    limit: 100
  })

  const posts = response.data || []

  return (
    <main className="container mx-auto grid lg:grid-cols-3 grid-cols-1 px-4 lg:px-0 gap-x-10 gap-y-8 pb-28">
      {posts.map(item => (
        <div key={item.id} className="flex-1">
          <NewsItem post={item.attributes} id={item.id} />
        </div>
      ))}

    </main>
  )
}