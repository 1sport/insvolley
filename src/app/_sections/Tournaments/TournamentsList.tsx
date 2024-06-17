"use client"

import {StrapiType, Tournament} from "@/shared/api/types";
import {useQueryState} from "nuqs";
import {clsx} from "clsx";

type Props = {
  data: StrapiType<Tournament>[]
}

export const TournamentsList = ({data}: Props) => {
  const [type, setType] = useQueryState('tournament')
  return (
    <div className="bg-primary-200 h-[452px] flex flex-col">
      <div className="bg-primary-150 flex items-center justify-center uppercase font-extrabold text-xl py-3">
        Турнирная таблица
      </div>
      <div className="flex w-full">
        <button onClick={() => setType("man", {shallow: false})}
                className={clsx(
                  "flex-1 flex items-center justify-center py-3",
                  {"bg-gradient-to-r from-[#1B5C98] to-[#2E9AFE]": type === "man" || type === null},
                  {"bg-[#2369D3]": type === "woman"}
                )}>
          Нац. Лига (М)
        </button>
        <button onClick={() => setType("woman", {shallow: false})}
                className={clsx(
                  "flex-1 flex items-center justify-center py-3",
                  {"bg-[#2369D3]": type === "man" || type === null},
                  {"bg-gradient-to-r from-[#1B5C98] to-[#2E9AFE]": type === "woman"}
                )}>
          Нац. Лига (Ж)
        </button>
      </div>
      <div className="overflow-y-scroll">
        <table className="w-full">
          <thead>
          <tr>
            <th className="py-1 px-2 text-left">№</th>
            <th className="py-1 px-2 text-left">Название</th>
            <th className="py-1 px-2 text-left">И</th>
            <th className="py-1 px-2 text-left">В</th>
            <th className="py-1 px-2 text-left">П</th>
            <th className="py-1 px-2 text-left">О</th>
          </tr>
          </thead>
          <tbody>
          {data.map((item, index) =>
              <tr key={index}>
                <td className="py-1 px-2">{item?.attributes?.number}</td>
                <td className="py-1 px-2 line-clamp-1">{item?.attributes?.name}</td>
                <td className="py-1 px-2">{item?.attributes?.games}</td>
                <td className="py-1 px-2">{item?.attributes?.wins}</td>
                <td className="py-1 px-2">{item?.attributes?.losses}</td>
                <td className="py-1 px-2">{item?.attributes?.points}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}