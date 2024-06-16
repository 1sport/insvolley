import {api} from "@/shared/api";
import {getImageUrl} from "@/shared/utils/image";

export const Partners = async () => {

  const data = await api.getPartners()

  if (!(data.data.length > 0)) {
    return null
  }

  return (
    <div className="bg-primary-400">
      <div className="container py-8">
        <div className="flex gap-4 items-center justify-center mb-6">
          <span className="w-10 h-1.5 bg-white"/>
          <h3 className="font-extrabold text-2xl">
            Партнеры
          </h3>
          <span className="w-10 h-1.5 bg-white"/>
        </div>

        <div className="grid grid-cols-3">
          <div className="col-span-1">
            {data.data.map((item, index) =>
              <div key={index}>
                <img src={getImageUrl(item.attributes.image)} alt="partner"/>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}