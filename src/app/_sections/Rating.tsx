export const Rating = () => {
  return (
    <div className="bg-primary-200 h-[420px] flex flex-col">
      <div className="bg-primary-150 flex items-center justify-center uppercase font-extrabold text-xl py-3">
        Рейтинг сборных
      </div>
      <div className="flex w-full">
        <div className="bg-gradient-to-r from-[#1B5C98] to-[#2E9AFE] flex-1 flex items-center justify-center py-3">
          Мужчины
        </div>
        <div className="bg-[#2369D3] flex-1 flex items-center justify-center py-3">
          Женщины
        </div>
      </div>
    </div>
  )
}