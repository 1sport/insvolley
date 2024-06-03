import {Header} from "@/app/_sections/Header";
import {MainSlide} from "@/app/_sections/MainSlide";
import {LeaguesList} from "@/app/_sections/LeaguesList";
import {Rating} from "@/app/_sections/Rating";
import {LastNews} from "@/app/_sections/LastNews";
import {Interview} from "@/app/_sections/Interview";
import {Media} from "@/app/_sections/Media";
import {Partners} from "@/app/_sections/Partners";
import {Footer} from "@/app/_sections/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="container grid grid-cols-3 gap-5 mb-14">
        <div className="col-span-2">
          <MainSlide />
        </div>
        <div className="col-span-1">
          <LeaguesList />
        </div>

        <div className="col-span-2">
          <LastNews />
        </div>
        <div className="col-span-1">
          <Rating />
        </div>

        <div className="col-span-3">
          <Interview />
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
