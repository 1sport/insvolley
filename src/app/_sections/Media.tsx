import {api} from "@/shared/api";

export const Media = async () => {
  const data = await api.getVideoMedia({
    limit: 6,
  })
  return (
    <div className="bg-gradient-primary py-6 px-6">
      <div className="flex gap-4 items-center mb-6">
        <span className="w-10 h-1.5 bg-white"/>
        <h3 className="font-extrabold text-2xl">
          Медиа
        </h3>
        <span className="w-10 h-1.5 bg-white"/>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {data.data.map((item, index) =>
          <div key={index} className="col-span-1 relative youtube-video-wrapper xl:h-[200px] lg:h-[220px] md:h-[180px] h-[220px]">
            <div className="youtube-video" dangerouslySetInnerHTML={{__html: JSON.parse((item.attributes.link as unknown as string))?.rawData?.html || ""}}/>
          </div>
        )}
      </div>
    </div>
  )
}