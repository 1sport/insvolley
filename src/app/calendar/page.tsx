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
          <TabsTrigger className="bg-[#0E284F] data-[state=active]:bg-[#133861] rounded-b-none px-10 sm:text-2xl text-md" value="man">Мужчины</TabsTrigger>
          <TabsTrigger className="bg-[#0E284F] data-[state=active]:bg-[#133861] rounded-b-none px-10 sm:text-2xl text-md" value="woman">Женщины</TabsTrigger>
        </TabsList>
        <div className="px-4">
          <TabsContent value="man">
            <Table name={data.name} events={data.events.filter(item => item.type === "Мужчины")} />
          </TabsContent>
          <TabsContent value="woman">
            <Table name={data.name} events={data.events.filter(item => item.type === "Женщины")} />
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

function Table({name, events}: TableProps) {
  return (
    <div className="bg-[#133861] rounded-r-lg rounded-bl-lg">
      <div className="flex justify-center py-6 px-2 sm:text-2xl text-md font-bold">{name}</div>
      <table className="w-full">
        <thead>
          <tr className="shadow-lg">
            <th className="text-left sm:px-4 px-1 py-4 bg-[#2D64A2] sm:text-md text-sm">Дата</th>
            <th className="text-left sm:px-4 px-1 py-4 bg-[#2D64A2] sm:text-md text-sm">Событие</th>
            <th className="text-left sm:px-4 px-1 py-4 bg-[#2D64A2] sm:text-md text-sm">Место проведения</th>
          </tr>
        </thead>
        <tbody>
          {events.map((item, index) =>
            <tr key={index}>
              <td className="text-left sm:px-4 px-1 py-3 border-b border-b-primary-150 sm:text-md text-sm">{item.date}</td>
              <td className="text-left sm:px-4 px-1 py-3 border-b border-b-primary-150 sm:text-md text-sm">{item.name}</td>
              <td className="text-left sm:px-4 px-1 py-3 border-b border-b-primary-150 sm:text-md text-sm">{item.place}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
