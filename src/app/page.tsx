import {Header} from "@/app/_sections/Header";
import {LastNews} from "@/app/_sections/LastNews";
import {InterviewList} from "@/app/_sections/Interview";
import {Media} from "@/app/_sections/Media";
import {Partners} from "@/app/_sections/Partners";
import {Footer} from "@/app/_sections/Footer";
import {MainSlide} from "@/app/_sections/MainSlide";
import {Ratings} from "@/app/_sections/Ratings";
import {Tournaments} from "@/app/_sections/Tournaments";
import {SearchParams} from "nuqs/server";
import {Suspense} from "react";

type Props = {
  searchParams: { rating: string, tournament: string }
}

export default function Home({searchParams}: Props) {
  return (
    <main>
      <div className="container grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mb-14">
        <div className="col-span-2 lg:order-1 order-1">
          <Suspense fallback={<MainSlide.Skeleton />}>
            <MainSlide />
          </Suspense>
        </div>
        <div className="sm:col-span-1 col-span-2 lg:order-2 order-3">
          <Suspense fallback={<Tournaments.Skeleton />}>
            <Tournaments type={searchParams.tournament} />
          </Suspense>
        </div>

        <div className="col-span-2 lg:order-3 order-2">
          <Suspense fallback={<LastNews.Skeleton />}>
            <LastNews />
          </Suspense>
        </div>
        <div className="sm:col-span-1 col-span-2 lg:order-4 order-4">
          <Suspense fallback={<Ratings.Skeleton />}>
            <Ratings type={searchParams.rating} />
          </Suspense>
        </div>

        <div className="lg:col-span-3 col-span-2 lg:order-5 order-5">
          <Suspense fallback={<InterviewList.Skeleton />}>
            <InterviewList />
          </Suspense>
        </div>

        <div className="lg:col-span-3 col-span-2 lg:order-6 order-6">
          <Suspense fallback={<Media.Skeleton />}>
            <Media />
          </Suspense>
        </div>
      </div>

      <Suspense fallback={<div />}>
        <Partners />
      </Suspense>
    </main>
  );
}
