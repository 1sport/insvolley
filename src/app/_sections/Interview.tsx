import Image from "next/image";
import QuoteIcon from '@/shared/images/quote.svg'
import {api} from "@/shared/api";
import {Interview} from "@/shared/api/types";
import {getImageUrl} from "@/shared/utils/image";

export const InterviewList = async () => {

  const data = await api.getInterviews({
    limit: 4
  })

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
        {data?.data?.map((item, index) =>
          <div key={index} className="col-span-1">
            <Item data={item?.attributes} />
          </div>
        )}
      </div>
    </div>
  )
}

type ItemProps = {
  data: Interview
}

const Item = ({ data }: ItemProps) => {
  return (
    <div className="flex gap-10">
      <div>
        <div className="overflow-hidden rounded-full w-[140px] h-[140px] relative mb-2">
          <img src={getImageUrl(data?.image)}
               alt={""}
               className="absolute object-cover object-top h-full w-full z-0"/>
        </div>
        <h4 className="text-center">
          {data.author}
        </h4>
      </div>
      <div className="flex flex-col">
        <div>
          <QuoteIcon width={16} height={16} />
        </div>
        <div className="pl-6">
          <h3 className="font-bold">{data?.title}</h3>
        </div>
        <div className="pl-6 flex justify-between items-end gap-10">
          <span className="w-full h-1.5 bg-white"/>
          <QuoteIcon width={16} height={16}/>
        </div>
      </div>
    </div>
  )
}