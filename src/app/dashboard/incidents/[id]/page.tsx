import { ArrowUpRight, Link } from "lucide-react";
import { Event } from "./components/event";
import { incidentsData } from "@/data/incidents";

export default function ({
  params,
}: {
  params: {
    id: string;
  };
}) {

  const incident = incidentsData.find((item) => item.id.toString() === params.id);
  return (
    <div className="h-screen w-full p-16">
      <h1 className="text-3xl">Incident#{params.id}</h1>
      <div className="grid gap-6 pt-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6 ">
          <div className="flex flex-col gap-2 rounded-lg border px-3 py-2 hover:border-primary">
            <p className="font-light text-muted-foreground text-sm uppercase">
              Monitor
            </p>
            <div className="flex flex-row items-end gap-2">
              <p className="font-semibold text-xl"> {incident?.Monitor}</p>
                <ArrowUpRight />
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border px-3 py-2 hover:border-primary">
            <p className="font-light text-muted-foreground text-sm uppercase">
              Duration
            </p>
            <p className="font-semibold text-xl">{incident?.Duration}</p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border px-3 py-2 hover:border-primary">
            <p className="font-light text-muted-foreground text-sm uppercase">
              Auto-resolved
            </p>
            <p className="font-mono font-semibold text-xl">False</p>
          </div>
        </div>
        <div className="max-w-xl text-2xl">
          <Event label="Started" date={new Date()}></Event>
          <Event label="Acknowledged " date={new Date()}></Event>
          <Event label="Resolved" date={new Date()}></Event>
        </div>
      </div>
    </div>
  );
}
