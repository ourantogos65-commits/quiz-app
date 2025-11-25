"use client";
import { useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Content } from "@/components/Container";
import { AppSideBar } from "@/components/AppSideBar";

export default function Home() {
  const getEmployees = async () => {
    const res = await fetch("/api/employees");
    const result = await res.json();
console.log(result)
    console.log(result.firstname,"name");
  };
  useEffect(() => {
    getEmployees();
  }, []);
  return (
    <div>
      <SidebarProvider
        className="bg-gray-100  flex justify-center"
        style={{
          "--sidebar-width": "20rem",
          "--sidebar-width-mobile": "20rem",
        }}
      >
        <AppSideBar />
        <SidebarTrigger />

        <Content />
      </SidebarProvider>
    </div>
  );
}
