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
import { incidentsData } from "@/data/dashboard-data";
import { useRouter } from "next/navigation";

export default function incidents() {
  const navigate = useRouter();
  const id: number = 5; // Replace with the actual ID you want to use

  return (
    <div className=" h-screen w-full p-16 ">
      <h1 className="text-3xl">Incidents</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Monitor</TableHead>
            <TableHead>Started At</TableHead>
            <TableHead>Acknowledged At</TableHead>
            <TableHead>Resolved At</TableHead>
            <TableHead>Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>

            <TableCell className="font-medium">{id}</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>$250.00</TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div>
                  <img src="" alt="" />
                  OPen
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Acknowledge</DropdownMenuItem>
                <DropdownMenuItem>Resolve</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <button onClick={() => navigate.push(`/dashboard/incidents/${id}`)}>Details</button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
