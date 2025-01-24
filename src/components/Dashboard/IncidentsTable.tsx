import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
const incidentsData = [
  {
    incident: "Database Outage",
    status: "Resolved",
    priority: "High",
    date: "2023-06-23",
    details: "Details",
  },
  {
    incident: "API Latency",
    status: "Investigating",
    priority: "Medium",
    date: "2023-06-24",
    details: "Details",
  },
  {
    incident: "Login Issues",
    status: "Monitoring",
    priority: "Low",
    date: "2023-06-25",
    details: "Details",
  },
  {
    incident: "Server Crash",
    status: "Resolved",
    priority: "Critical",
    date: "2023-06-26",
    details: "Details",
  },
  {
    incident: "Authentication Issues",
    status: "Monitoring",
    priority: "Low",
    date: "2023-06-15",
    details: "Details",
  },
  {
    incident: "Server Slow down",
    status: "Resolved",
    priority: "Critical",
    date: "2023-06-16",
    details: "Details",
  },
];
const IncidentsTable = () => {
  return (
    <div>
      {/* Recent Incidents */}
      <Card className="w-full hover:border-primary" id="incidents">
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>Recent Incidents</CardTitle>
            <CardDescription>Overview of recent incidents.</CardDescription>
          </div>
          <Button asChild size="sm" className="ml-auto gap-1">
            <Link href="#">
              View All
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Incident</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {incidentsData.map((incident, index) => (
                <TableRow key={index}>
                  <TableCell>{incident.incident}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{incident.status}</Badge>
                  </TableCell>
                  <TableCell>{incident.priority}</TableCell>
                  <TableCell>{incident.date}</TableCell>
                  <TableCell className="text-right">
                    {incident.details}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default IncidentsTable;
