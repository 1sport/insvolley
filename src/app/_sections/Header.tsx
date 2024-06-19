import Logo from '@/shared/images/logo.svg'
import {Socials} from "@/features/Socials";
import {Menu} from "@/features/Menu";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="container py-10 flex justify-between items-end flex-wrap">
      <Link href='/' className="order-1 sm:w-[240px] w-[150px]">
        <Logo className="w-full" />
      </Link>
      <Menu className="md:order-2 order-3 md:w-auto w-full justify-center md:pt-0 pt-8" />
      <div className="md:order-3 order-2">
        <Socials />
      </div>
    </div>
  )
}