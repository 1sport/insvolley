import Logo from '@/shared/images/logo.svg'
import {Socials} from "@/features/Socials";
import {Menu} from "@/features/Menu";

export const Footer = () => {
  return (
    <div className="bg-primary-150">
      <div className="container py-[75px] grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <Logo/>
          <div className="mt-[75px]">
            Республика Казахстан, 010000,<br/>
            город Астана, проспект Қабанбай батыр<br/><br/>

            Телефоны: +7 (7172) 123456, 543210<br/>
            E-mail: info@insvolley.kz<br/><br/>

            Любое использование материалов допускается<br/>
            только при наличии гиперссылки на insvolley.kz
          </div>
        </div>
        <div className="col-span-1">
          <Menu horizontal />
        </div>
        <div className="col-span-a flex justify-end">
          <Socials />
        </div>
      </div>
    </div>
  )
}