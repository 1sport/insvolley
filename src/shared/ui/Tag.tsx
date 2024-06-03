import {clsx} from "clsx";

type Props = {
  size?: "s" | "m"
}

export const Tag = ({ size = "m" }: Props) => {
  return (
    <div className={clsx(
      "bg-yellow text-black rounded-full font-semibold ",
      {"px-4 py-1 text-sm": size === "m"},
      {"px-2 py-1 text-xs": size === "s"}
    )}>
      Республиканский
    </div>
  )
}