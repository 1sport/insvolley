import {clsx} from "clsx";

type Props = {
  horizontal?: boolean
}

export const Menu = ({ horizontal = false }: Props) => {
  return (
    <ul className={clsx("text-white flex", {"flex-col gap-4": horizontal}, { "gap-9": !horizontal })}>
      <li>Новости</li>
      <li>Календарь</li>
      <li>Турниры</li>
      <li>Сборные</li>
      <li>Клубы</li>
    </ul>
  )
}