"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { incidentsData } from "@/data/incidents";
import { useRouter } from "next/navigation";
import { Ellipsis } from "lucide-react";

export default function incidents() {
  const navigate = useRouter();

  return (
    <div className="h-screen w-full p-16 md:p-8 lg:p-16 ">
      <h1 className="text-2xl md:text-3xl font-bold">Incidents</h1>
      <div className="overflow-x-auto grid ">
        <Table className="mt-6 sm:w-full rounded-md border">
          <TableHeader className="bg-muted  text-muted-foreground">
            <TableRow >
              <TableHead className="w-[100px] ">Monitor</TableHead>
              <TableHead>Started At</TableHead>
              <TableHead>Acknowledged At</TableHead>
              <TableHead>Resolved At</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {incidentsData.map((items, id) => (
              <TableRow key={items.id}>
                <TableCell className="font-medium">{items.Monitor}</TableCell>
                <TableCell>{items.StartedAt}</TableCell>
                <TableCell>{items.AcknowledgedAt}</TableCell>
                <TableCell>{items.ResolvedAt}</TableCell>
                <TableCell>{items.Duration}</TableCell>

                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <div className="flex flex-row items-center">
                      < Ellipsis />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Acknowledge</DropdownMenuItem>
                    <DropdownMenuItem>Resolve</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <button
                        onClick={() =>
                          navigate.push(`/dashboard/incidents/${items.id}`)
                        }
                      >
                        Details
                      </button>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
