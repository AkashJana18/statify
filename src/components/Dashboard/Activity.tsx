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

export default function ActivityLog() {
    const activityData = [
        {
          id: 1,
          timestamp: "2025-01-24 10:15 AM",
          event: "User Login",
          details: "Akash logged in from Chrome on Windows.",
        },
        {
          id: 2,
          timestamp: "2025-01-23 08:45 PM",
          event: "Service Monitored",
          details: "Website uptime monitoring started.",
        },
        {
          id: 3,
          timestamp: "2025-01-22 04:30 PM",
          event: "API Key Generated",
          details: "A new API key was created for the 'Analytics' service.",
        },
        {
          id: 4,
          timestamp: "2025-01-21 02:10 PM",
          event: "Role Updated",
          details: "User role changed from 'Viewer' to 'Admin'.",
        },
        {
          id: 5,
          timestamp: "2025-01-20 11:00 AM",
          event: "File Uploaded",
          details: "User 'JohnDoe' uploaded 'report.pdf' to the shared workspace.",
        },
        {
          id: 6,
          timestamp: "2025-01-19 09:20 PM",
          event: "Password Reset",
          details: "User initiated a password reset request.",
        }
      ];
    

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
