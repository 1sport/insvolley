import {api} from "@/shared/api";
import {Slide} from "@/app/_sections/MainSlide/Slide";
import {Skeleton} from "@/shared/ui/Skeleton";

const MainSlide = async () => {

  const data = await api.getPosts({
    limit: 6,
    filters: {
      main: true
    }
  })

  return <Slide data={data.data} />
}

function MainSlideSkeleton() {
  return (
    <Skeleton className="h-[452px]" />
  )
}

MainSlide.Skeleton = MainSlideSkeleton

export { MainSlide }