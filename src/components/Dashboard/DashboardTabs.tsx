import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconNotification } from "@tabler/icons-react";
import { Activity, Users } from "lucide-react";

const dashboardData = [
  {
    title: "Total Incidents",
    icon: <Activity className="h-4 w-4 text-muted-foreground" />,
    value: "45",
    description: "+10% from last week",
  },
  {
    title: "Active Systems",
    icon: <Users className="h-4 w-4 text-muted-foreground" />,
    value: "12",
    description: "Stable",
  },
  {
    title: "Resolved Incidents",
    icon: <Activity className="h-4 w-4 text-muted-foreground" />,
    value: "38",
    description: "+20% from last month",
  },
  {
    title: "Pending Incidents",
    icon: <Activity className="h-4 w-4 text-muted-foreground" />,
    value: "7",
    description: "Critical Priority",
  },
  {
    title: "Notification",
    icon: <IconNotification className="h-4 w-4 text-muted-foreground" />,
    value: "3",
    description: "Check Notifications",
  },
];

const DashboardTabs: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {dashboardData.map((item, index) => (
        <Card
          key={index}
          className="hover:border-primary flex flex-col justify-between"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 sm:gap-4">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            {item.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{item.value}</div>
            <p className="text-xs text-muted-foreground">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardTabs;
