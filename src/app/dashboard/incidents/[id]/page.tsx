import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight, Link } from "lucide-react";
import {Event} from "./components/event"

export default function ({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <div className="h-screen w-full p-16">
      <h1 className="text-3xl">Incident#{params.id}</h1>
      <div className="grid gap-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6">
          <div className="flex flex-col gap-2 rounded-lg border px-3 py-2">
            <p className="font-light text-muted-foreground text-sm uppercase">
              Monitor
            </p>
            <div className="flex flex-row items-end gap-2">
              <p className="font-semibold text-xl"></p>
              <Link
                href={``}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowUpRight />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border px-3 py-2">
            <p className="font-light text-muted-foreground text-sm uppercase">
              Duration
            </p>
            <p className="font-semibold text-xl">Duration</p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border px-3 py-2">
            <p className="font-light text-muted-foreground text-sm uppercase">
              Auto-resolved
            </p>
            <p className="font-mono font-semibold text-xl">incidents</p>
          </div>
        </div>
        <div className="max-w-xl">
            <Event label="Started" date={new Date()} > 

            </Event>
        </div>
      </div>
    </div>
  );
}
