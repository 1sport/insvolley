import {api} from "@/shared/api";
import {TournamentsList} from "@/app/_sections/Tournaments/TournamentsList";
import {Skeleton} from "@/shared/ui/Skeleton";

type Props = {
  type: string
}

const Tournaments = async ({type}: Props) => {
  const data = await api.getTournaments({
    filters: {
      type: type  === "woman" ? "Женщины" : "Мужчины"
    }
  })

  return <TournamentsList data={data.data} />
}

function TournamentsSkeleton() {
  return (
    <Skeleton className="h-[452px]" />
  )
}

Tournaments.Skeleton = TournamentsSkeleton

export { Tournaments }