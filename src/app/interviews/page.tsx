import {api} from "@/shared/api";
import {InterviewItem} from "@/app/_sections/Interview";

export default async function InterviewsPage() {
  const response = await api.getInterviews({
    limit: 100
  })

  const posts = response.data || []

  return (
    <main className="container mx-auto grid lg:grid-cols-2 grid-cols-1 px-4 lg:px-0 gap-x-10 gap-y-8 pb-28 pt-6">
      {posts.map(item => (
        <div key={item.id} className="flex-1">
          <InterviewItem data={item.attributes} id={item.id} />
        </div>
      ))}

    </main>
  )
}