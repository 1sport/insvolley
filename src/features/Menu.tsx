import {clsx} from "clsx";
import Link from "next/link";

type Props = {
  horizontal?: boolean
}

export const Menu = ({ horizontal = false }: Props) => {
  return (
    <ul className={clsx("text-white flex", {"flex-col gap-4": horizontal}, {"gap-9": !horizontal})}>
      <li>
        <Link href="/news">
          Новости
        </Link>
      </li>
      <li>
        <Link href="/calendar">
          Календарь
        </Link>
      </li>
      <li>
        <Link href="/interviews">
          Интервью
        </Link>
      </li>
    </ul>
  )
}