import Logo from '@/shared/images/logo.svg'
import {Socials} from "@/features/Socials";
import {Menu} from "@/features/Menu";

export const Footer = () => {
  return (
    <div className="bg-primary-150">
      <div className="container py-[75px] grid grid-cols-3 gap-4">
        <div className="md:col-span-1 md:row-span-1 col-span-2 row-span-2">
          <Logo/>
          <div className="mt-[75px]">
            Республика Казахстан, 010000,<br/>
            город Астана, проспект Қабанбай батыр<br/><br/>

            E-mail: eldar_mu@mail.ru<br/><br/>

            Любое использование материалов допускается<br/>
            только при наличии гиперссылки на insvolley.kz
          </div>
        </div>
        <div className="col-span-1">
          <Menu horizontal />
        </div>
        <div className="col-span-1 flex justify-end">
          <Socials />
        </div>
      </div>
    </div>
  )
}