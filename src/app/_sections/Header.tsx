import Logo from '@/shared/images/logo.svg'
import {Socials} from "@/features/Socials";
import {Menu} from "@/features/Menu";

export const Header = () => {
  return (
    <div className="container py-10 flex justify-between items-end">
      <Logo />
      <Menu />
      <div className="">
        <Socials />
      </div>
    </div>
  )
}