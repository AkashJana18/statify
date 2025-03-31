import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertTriangle, XCircle, Clock, RefreshCw } from "lucide-react"
import Footer from "@/components/Footer";

type StatusType = "operational" | "degraded" | "outage" | "maintenance" | "unknown"

interface Service {
    id: string
    name: string
    description: string
    status: StatusType
    lastUpdated: string
}

const services: Service[] = [
    {
        id: "1",
        name: "API",
        description: "Core API services",
        status: "operational",
        lastUpdated: "2 minutes ago",
    },
    {
        id: "2",
        name: "Dashboard",
        description: "User dashboard and analytics",
        status: "degraded",
        lastUpdated: "15 minutes ago",
    },
    {
        id: "3",
        name: "Authentication",
        description: "User authentication and authorization",
        status: "operational",
        lastUpdated: "1 hour ago",
    },
    {
        id: "4",
        name: "Database",
        description: "Primary database cluster",
        status: "outage",
        lastUpdated: "30 minutes ago",
    },
    {
        id: "5",
        name: "Storage",
        description: "File storage and CDN",
        status: "maintenance",
        lastUpdated: "2 hours ago",
    },
    {
        id: "6",
        name: "Notifications",
        description: "Email and push notifications",
        status: "operational",
        lastUpdated: "45 minutes ago",
    },
]

const StatusBadge = ({ status }: { status: StatusType }) => {
    const statusConfig = {
        operational: {
            color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
            icon: <CheckCircle className="h-4 w-4 mr-1" />,
            label: "Operational",
        },
        degraded: {
            color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
            icon: <AlertTriangle className="h-4 w-4 mr-1" />,
            label: "Degraded",
        },
        outage: {
            color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
            icon: <XCircle className="h-4 w-4 mr-1" />,
            label: "Outage",
        },
        maintenance: {
            color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
            icon: <Clock className="h-4 w-4 mr-1" />,
            label: "Maintenance",
        },
        unknown: {
            color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100",
            icon: <RefreshCw className="h-4 w-4 mr-1" />,
            label: "Unknown",
        },
    }

    const config = statusConfig[status]

    return (
        <Badge className={`${config.color} flex items-center`} variant="outline">
            {config.icon}
            {config.label}
        </Badge>
    )
}

export default function StatusPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold mb-2">System Status</h1>
                <p className="text-muted-foreground">Current status of all our services and systems</p>
            </div>

            <Card className="mb-8 border-2 transition-all duration-300 hover:shadow-md">
                <CardHeader className="pb-2">
                    <CardTitle>Overall System Status</CardTitle>
                    <CardDescription>Last checked: Just now</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <StatusBadge status="degraded" />
                        </div>
                        <button className="text-primary hover:text-primary/80 transition-colors flex items-center text-sm">
                            <RefreshCw className="h-4 w-4 mr-1" />
                            Refresh
                        </button>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                    <Card
                        key={service.id}
                        className="transition-all duration-300 hover:shadow-md hover:border-primary/50 cursor-pointer group"
                    >
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                                <CardTitle className="group-hover:text-primary transition-colors">{service.name}</CardTitle>
                                <StatusBadge status={service.status} />
                            </div>
                            <CardDescription>{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-sm text-muted-foreground">Updated {service.lastUpdated}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Recent Incidents</h2>
                <Card>
                    <CardContent className="p-0">
                        <div className="divide-y">
                            <div className="p-4 hover:bg-muted/50 transition-colors">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-medium">API Performance Degradation</h3>
                                    <Badge variant="outline">Resolved</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground mb-1">
                                    Our API experienced increased latency due to database connection issues.
                                </p>
                                <p className="text-xs text-muted-foreground">March 30, 2025 - 4:30 PM</p>
                            </div>
                            <div className="p-4 hover:bg-muted/50 transition-colors">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-medium">Authentication Service Outage</h3>
                                    <Badge variant="outline">Resolved</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground mb-1">
                                    Users were unable to log in for approximately 15 minutes.
                                </p>
                                <p className="text-xs text-muted-foreground">March 28, 2025 - 2:15 PM</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Footer Component */}
            <Footer />
        </div>
    )
}
