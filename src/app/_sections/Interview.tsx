import Image from "next/image";
import QuoteIcon from '@/shared/images/quote.svg'

export const Interview = () => {
  return (
    <div className="bg-primary-200 py-6 px-6">
      <div className="flex gap-4 items-center mb-6">
        <span className="w-10 h-1.5 bg-white"/>
        <h3 className="font-extrabold text-2xl">
          Интервью
        </h3>
        <span className="w-10 h-1.5 bg-white"/>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-1">
          <Item />
        </div>
        <div className="col-span-1">
          <Item />
        </div>
        <div className="col-span-1">
          <Item />
        </div>
        <div className="col-span-1">
          <Item />
        </div>
      </div>
    </div>
  )
}

const Item = () => {
  return (
    <div className="flex gap-10">
      <div>
        <div className="overflow-hidden rounded-full w-[140px] h-[140px] relative mb-2">
          <Image src="/tmp-news.png" fill alt="image" quality={100} style={{ objectFit: 'cover' }} />
        </div>
        <h4 className="text-center">
          Бағдаулет
          Ерғали
        </h4>
      </div>
      <div className="flex flex-col">
        <div>
          <QuoteIcon width={16} height={16} />
        </div>
        <div className="pl-6">
          Иногда то, чем ты начинаешь
          заниматься спонтанно,
          в итоге может стать чем-то
          особенным для тебя.
        </div>
        <div className="pl-6 flex justify-between items-end gap-10">
          <span className="w-full h-1.5 bg-white"/>
          <QuoteIcon width={16} height={16}/>
        </div>
      </div>
    </div>
  )
}