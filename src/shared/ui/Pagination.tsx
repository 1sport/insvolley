"use client"

import {cn} from "@/shared/utils/utils";
import {parseAsInteger, useQueryState} from "nuqs";

type Props = {
  "limit": number,
  "total": number,
  currentPage: number
}

export function Pagination({ limit, total, currentPage }: Props) {
  const [page, setPage] = useQueryState('page',  parseAsInteger.withDefault(currentPage))

  const pageCount = Math.ceil(total / limit)

  return (
    <div className="flex gap-2">
      {new Array(pageCount).fill(0).map((_, i) => (
        <button key={i} onClick={() => setPage(i + 1, { shallow: false })} className={cn(
          "w-8 h-8 bg-primary-200 flex items-center justify-center rounded-md text-sm hover:bg-primary-200/90",
          {"bg-primary-400": i + 1 === page}
        )}>
          {i + 1}
        </button>
      ))}
    </div>
  )
}