import {NewsList} from "@/app/_sections/NewsList";
import {Suspense} from "react";

type Props = {
  searchParams: { page: string }
}

export default async function NewsPage({ searchParams }: Props) {
  return (
    <main className="container mx-auto pb-28">
      <Suspense fallback={<NewsList.Skeleton />}>
        <NewsList page={searchParams.page} />
      </Suspense>
    </main>
  )
}
