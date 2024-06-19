import {clsx} from "clsx";
import Link from "next/link";

type Props = {
  horizontal?: boolean
  className?: string
}

export const Menu = ({ horizontal = false, className }: Props) => {
  return (
    <ul className={clsx("text-white flex", {"flex-col gap-4": horizontal}, {"gap-9": !horizontal}, className)}>
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