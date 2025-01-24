"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

import { TrendingUp } from "lucide-react";
import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

const chartData = [
  { service: "API", uptime: 97, fill: "#CF9FFF" },
  { service: "Database", uptime: 95, fill: "#5D3FD3" },
  { service: "Frontend", uptime: 98, fill: "#BF40BF" },
  { service: "Backend", uptime: 96, fill: "#7F00FF" },
];

const chartConfig = {
  uptime: { label: "Uptime %" },
  api: { label: "API", color: "hsl(var(--chart-1))" },
  database: { label: "Database", color: "hsl(var(--chart-2))" },
  frontend: { label: "Frontend", color: "hsl(var(--chart-3))" },
  backend: { label: "Backend", color: "hsl(var(--chart-4))" },
} satisfies ChartConfig;

export function AnalyticsSection() {
  const totalUptime = React.useMemo(() => {
    return (
      chartData.reduce((acc, curr) => acc + curr.uptime, 0) / chartData.length
    );
  }, []);

  return (
    <>
      {/* Monitor Status Chart */}
      <Card className="w-full hover:border-primary" id="analytics">
        <CardHeader className="items-center pb-0">
          <CardTitle>Service Uptime Overview</CardTitle>
          <CardDescription>Last 30 Days</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="uptime"
                nameKey="service"
                innerRadius={60}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {totalUptime.toFixed(2)}%
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Avg Uptime
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Trending up by 1.8% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Based on average uptime for all services.
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
