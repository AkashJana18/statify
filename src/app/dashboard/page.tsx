import ActivityLog from "@/components/Dashboard/Activity";
import { AnalyticsSection } from "@/components/Dashboard/Analytics";
import DashboardTabs from "@/components/Dashboard/DashboardTabs";
import IncidentsTable from "@/components/Dashboard/IncidentsTable";
import Navbar from "@/components/Dashboard/Navbar";
import SystemHealthOverview from "@/components/Dashboard/SystemHealthOverview";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col gap-8">
      <Navbar />
      <DashboardTabs />
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <IncidentsTable />
        </div>
        <div className="col-span-4">
          <AnalyticsSection />
        </div>
        <div className="col-span-4">
          <SystemHealthOverview />
        </div>
        <div className="col-span-8">
          <ActivityLog />
        </div>
      </div>
    </div>
  );
}
