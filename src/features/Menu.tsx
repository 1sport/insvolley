import {clsx} from "clsx";
import Link from "next/link";

type Props = {
  horizontal?: boolean
}

export const Menu = ({ horizontal = false }: Props) => {
  return (
    <ul className={clsx("text-white flex", {"flex-col gap-4": horizontal}, { "gap-9": !horizontal })}>
      <li>
        <Link href="/news">
          Новости
        </Link>
      </li>
      <li>Календарь</li>
      <li>Турниры</li>
      <li>Сборные</li>
      <li>Клубы</li>
    </ul>
  )
}