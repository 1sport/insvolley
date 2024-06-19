import {api} from "@/shared/api";
import {NewsItem} from "@/app/_sections/LastNews";
import {Pagination} from "@/shared/ui/Pagination";
import {Skeleton} from "@/shared/ui/Skeleton";

type Props = {
  page: string
}

export async function NewsList({page}: Props) {
  const response = await api.getPosts({
    start: page ? (Number(page) - 1) * 15 : 0,
    limit: 15
  })

  const posts = response.data || []
  const start = response.meta.pagination.start
  const limit = response.meta.pagination.limit

  const currentPage = page ? Number(page) : Math.ceil(start / limit) || 1

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-4 lg:px-0 gap-x-10 gap-y-8">
        {posts.map(item => (
          <div key={item.id} className="flex-1">
            <NewsItem post={item.attributes} id={item.id} />
          </div>
        ))}
      </div>
      <div className="p-4">
        <Pagination currentPage={currentPage} total={response.meta.pagination.total} limit={response.meta.pagination.limit} />
      </div>
    </div>
  )
}

function NewsListSkeleton() {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 px-4 lg:px-0 gap-x-10 gap-y-8">
      <Skeleton className="h-[232px]" />
      <Skeleton className="h-[232px]" />
      <Skeleton className="h-[232px]" />
      <Skeleton className="h-[232px]" />
      <Skeleton className="h-[232px]" />
      <Skeleton className="h-[232px]" />
      <Skeleton className="h-[232px]" />
      <Skeleton className="h-[232px]" />
      <Skeleton className="h-[232px]" />
      <Skeleton className="h-[232px]" />
      <Skeleton className="h-[232px]" />
      <Skeleton className="h-[232px]" />
      <Skeleton className="h-[232px]" />
      <Skeleton className="h-[232px]" />
      <Skeleton className="h-[232px]" />
    </div>
  )
}

NewsList.Skeleton = NewsListSkeleton