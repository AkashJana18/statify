import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DashboardPage() {
  return (
    <>
      {/* Mobile view fallback */}
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>

      {/* Admin Dashboard */}
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          {/* Header */}
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
               Dashboard
            </h2>
            <div className="flex items-center space-x-2">
              <Button>Create New Service</Button>
              <Button>Create New Incident</Button>
            </div>
          </div>

          {/* Tabs for navigation */}
          <Tabs defaultValue="services" className="space-y-4">
            <TabsList>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="incidents">Incidents</TabsTrigger>
              <TabsTrigger value="recent-updates">Recent Updates</TabsTrigger>
            </TabsList>

            {/* Services Tab */}
            <TabsContent value="services" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Website
                    </CardTitle>
                    <p className="h-4  text-green-500">
                      ● Operational
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xs text-muted-foreground">
                      Updated 5 minutes ago
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">API</CardTitle>
                    <span className="h-4 text-red-500">● Major Outage</span>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xs text-muted-foreground">
                      Updated 2 hours ago
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Database
                    </CardTitle>
                    <span className="h-4 text-yellow-500">
                      ● Degraded Performance
                    </span>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xs text-muted-foreground">
                      Updated 30 minutes ago
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Incidents Tab */}
            <TabsContent value="incidents" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Incident #1</CardTitle>
                    <CardDescription>
                      High latency in API services.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">
                      Status: <span className="text-yellow-500">Open</span>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Reported: 2 hours ago
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Incident #2</CardTitle>
                    <CardDescription>
                      Database connection failure.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">
                      Status: <span className="text-red-500">Resolved</span>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Resolved: 30 minutes ago
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Recent Updates Tab */}
            <TabsContent value="recent-updates" className="space-y-4">
              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Service Updates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">
                      Website status changed to "Operational".
                    </p>
                    <p className="text-xs text-muted-foreground">
                      API status changed to "Major Outage".
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
