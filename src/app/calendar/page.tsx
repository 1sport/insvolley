import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/shared/ui/Tabs";
import {api} from "@/shared/api";
import {CalendarEvent} from "@/shared/api/types";


export default async function CalendarPage() {
  const response = await api.getCalendar()

  if (response.data && response.data.length === 0) {
    return null
  }

  const data = response.data[0].attributes;

  return (
    <main className="container mx-auto mb-20">
      <Tabs
        defaultValue="man"
        defaultChecked
      >
        <TabsList className="gap-0">
          <TabsTrigger className="bg-[#0E284F] data-[state=active]:bg-[#133861] rounded-b-none px-10 text-2xl" value="man">Мужчины</TabsTrigger>
          <TabsTrigger className="bg-[#0E284F] data-[state=active]:bg-[#133861] rounded-b-none px-10 text-2xl" value="woman">Женщины</TabsTrigger>
        </TabsList>
        <div className="px-4">
          <TabsContent value="man">
            <ManTable name={data.name} events={data.events.filter(item => item.type === "Мужчины")} />
          </TabsContent>
          <TabsContent value="woman">
            <WomanTable name={data.name} events={data.events.filter(item => item.type === "Женщины")} />
          </TabsContent>
        </div>
      </Tabs>
    </main>
  )
}

type TableProps = {
  name: string
  events: CalendarEvent[]
}

function ManTable({name, events}: TableProps) {
  return (
    <div className="bg-[#133861] rounded-r-lg rounded-bl-lg">
      <div className="flex justify-center py-6 px-2 text-2xl font-bold">{name}</div>
      <table className="w-full">
        <thead>
          <tr className="shadow-lg">
            <th className="text-left px-4 py-4 bg-[#2D64A2]">Дата</th>
            <th className="text-left px-4 py-4 bg-[#2D64A2]">Событие</th>
            <th className="text-left px-4 py-4 bg-[#2D64A2]">Место проведения</th>
          </tr>
        </thead>
        <tbody>
          {events.map((item, index) =>
            <tr key={index}>
              <td className="text-left px-4 py-3 border-b border-b-primary-150">{item.date}</td>
              <td className="text-left px-4 py-3 border-b border-b-primary-150">{item.name}</td>
              <td className="text-left px-4 py-3 border-b border-b-primary-150">{item.place}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

function WomanTable({name, events}: TableProps) {
  return (
    <div className="bg-[#133861] rounded-r-lg rounded-bl-lg">
      <div className="flex justify-center py-6 px-2 text-2xl font-bold">{name}</div>
      <table className="w-full">
      <thead>
        <tr className="shadow-lg">
          <th className="text-left px-4 py-4 bg-[#2D64A2]">Дата</th>
          <th className="text-left px-4 py-4 bg-[#2D64A2]">Событие</th>
          <th className="text-left px-4 py-4 bg-[#2D64A2]">Место проведения</th>
        </tr>
        </thead>
        <tbody>
          {events.map((item, index) =>
            <tr key={index}>
              <td className="text-left px-4 py-3 border-b border-b-primary-150">{item.date}</td>
              <td className="text-left px-4 py-3 border-b border-b-primary-150">{item.name}</td>
              <td className="text-left px-4 py-3 border-b border-b-primary-150">{item.place}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}