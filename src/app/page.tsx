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

type Props = {
  searchParams: { rating: string, tournament: string }
}

export default function Home({searchParams}: Props) {
  return (
    <main>
      <Header />
      <div className="container grid grid-cols-3 gap-5 mb-14">
        <div className="col-span-2">
          <MainSlide />
        </div>
        <div className="col-span-1">
          <Tournaments type={searchParams.tournament} />
        </div>

        <div className="col-span-2">
          <LastNews />
        </div>
        <div className="col-span-1">
          <Ratings type={searchParams.rating} />
        </div>

        <div className="col-span-3">
          <InterviewList />
        </div>

        <div className="col-span-3">
          <Media />
        </div>
      </div>

      <Partners />

      <Footer />
    </main>
  );
}
