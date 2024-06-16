import {api} from "@/shared/api";
import {TournamentsList} from "@/app/_sections/Tournaments/TournamentsList";

type Props = {
  type: string
}

export const Tournaments = async ({type}: Props) => {
  const data = await api.getTournaments({
    filters: {
      type: type  === "woman" ? "Женщины" : "Мужчины"
    }
  })

  return <TournamentsList data={data.data} />
}