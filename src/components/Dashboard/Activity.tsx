import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { activityData } from "@/data/dashboard-data";

export default function ActivityLog() {
    

  return (
    <section id="activity">
      <Card className="w-full hover:border-primary">
        <CardHeader>
          <CardTitle>Activity Log</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="user">User Actions</TabsTrigger>
              <TabsTrigger value="system">System Events</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[20%]">Timestamp</TableHead>
                    <TableHead className="w-[20%]">Event</TableHead>
                    <TableHead>Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activityData.map((activity) => (
                    <TableRow key={activity.id}>
                      <TableCell>{activity.timestamp}</TableCell>
                      <TableCell>{activity.event}</TableCell>
                      <TableCell>{activity.details}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="user">
              <p>
                Filter for user actions (e.g., logins, updates) will go here.
              </p>
            </TabsContent>
            <TabsContent value="system">
              <p>Filter for system-related events will go here.</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
}
