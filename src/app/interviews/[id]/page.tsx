import {api} from "@/shared/api";
import {getImageUrl} from "@/shared/utils/image";
import {LocalTime} from "@/features/LocalTime";
import {Content} from "@/shared/ui/Content";
import QuoteIcon from "@/shared/images/quote.svg";

type Props = {
  params: { id: string }
}

export default async function InterviewPage({ params }: Props) {
  const response = await api.getInterview(Number(params.id))

  const data = response.data.attributes

  return (
    <main className="container mx-auto grid grid-cols-6 mb-16">
      <div className="lg:col-span-1"/>
      <div className="sm:col-span-4 col-span-6">
        <div className="flex gap-10 mb-8">
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
              <QuoteIcon width={16} height={16}/>
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
        <div className="whitespace-pre-line">
          {data.text}
        </div>
      </div>
    </main>
  )
}