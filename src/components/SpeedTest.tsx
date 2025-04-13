"use client";

import { useState, useEffect } from "react";
import { getPing, getDownloadSpeed, getUploadSpeed } from "../lib/speedTest";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";

interface SpeedData {
  time: string;
  download: number;
  upload: number;
}

const SpeedTest = () => {
  const [ping, setPing] = useState<string | null>(null);
  const [download, setDownload] = useState<string | null>(null);
  const [upload, setUpload] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<SpeedData[]>([
    { time: "00:00", download: 0, upload: 0 }, // Initial placeholder data
    { time: "00:01", download: 0, upload: 0 },
    { time: "00:02", download: 0, upload: 0 },
  ]);

  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setData((prev) => {
        const time = new Date().toLocaleTimeString();
        const newDownload = prev.length < 20 ? Math.random() * 100 : 0;
        const newUpload = prev.length < 20 ? Math.random() * 50 : 0;

        const newData = [
          ...prev,
          { time, download: newDownload, upload: newUpload },
        ];

        return newData.length > 20 ? newData.slice(1) : newData;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [loading]);

  const runTest = async () => {
    setLoading(true);
    setPing(null);
    setDownload(null);
    setUpload(null);

    // Add initial placeholder data
    setData([
      { time: "00:00", download: 0, upload: 0 },
      { time: "00:01", download: 0, upload: 0 },
      { time: "00:02", download: 0, upload: 0 },
    ]);

    const pingResult = await getPing();
    setPing(pingResult);

    const downloadResult = await getDownloadSpeed();
    setDownload(downloadResult);

    const uploadResult = await getUploadSpeed();
    setUpload(uploadResult);

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen justify-center p-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl"
      >
        <Card className="shadow-xl rounded-lg">
          <CardContent className="p-5">
            <h1 className="text-4xl font-bold text-center mb-6">
              🌐 Internet Speed Test
            </h1>

            <div className="w-full h-72 mb-6">
              <ResponsiveContainer>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip
                    content={({ payload }) => {
                      if (!payload || payload.length === 0) {
                        return (
                          <div className="p-2 text-sm text-gray-500">
                            Waiting for test...
                          </div>
                        );
                      }
                      return (
                        <div className="p-2 bg-white border rounded shadow-md">
                          <p className="text-xs text-gray-500">
                            {payload[0].payload.time}
                          </p>
                          <p>Download: {payload[0].payload.download} Mbps</p>
                          <p>Upload: {payload[0].payload.upload} Mbps</p>
                        </div>
                      );
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="download"
                    stroke="#4F46E5"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="upload"
                    stroke="#10B981"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1  gap-4 md:grid-cols-3">
              <div className="text-center flex flex-col items-center">
                <p className="text-gray-600">Ping</p>
                <p className="text-2xl font-bold mt-2">
                  {ping ? (
                    `${ping} ms`
                  ) : loading ? (
                    <LoaderCircle className="animate-spin" />
                  ) : (
                    "--"
                  )}
                </p>
              </div>

              <div className="text-center flex flex-col items-center">
                <p className="text-gray-600">Download</p>
                <p className="text-2xl font-bold mt-2">
                  {download ? (
                    `${download} Mbps`
                  ) : loading ? (
                    <LoaderCircle className="animate-spin" />
                  ) : (
                    "--"
                  )}
                </p>
              </div>

              <div className="text-center flex flex-col items-center">
                <p className="text-gray-600">Upload</p>
                <p className="text-2xl font-bold mt-2">
                  {upload ? (
                    `${upload} Mbps`
                  ) : loading ? (
                    <LoaderCircle className="animate-spin" />
                  ) : (
                    "--"
                  )}
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <Button onClick={runTest} disabled={loading}>
                {loading ? "Testing..." : "Start Test"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default SpeedTest;
