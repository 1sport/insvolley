
import {HTMLAttributes} from "react";
import {cn} from "@/shared/utils/utils";

function Skeleton({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary-200/50", className)}
      {...props}
    />
  )
}

export { Skeleton }