import type React from "react"
import { DashboardHeader } from "./DashboardHeader"
import { AppSidebar } from "../AppSidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
export function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
        <SidebarProvider>
            <div className="flex min-h-screen">
            <AppSidebar />
            <div className="flex flex-col flex-1">
            <DashboardHeader />

                <SidebarTrigger />

                <main className="flex-1 p-4">{children}</main>
            </div>
            </div>
        </SidebarProvider>
        </>

    )
}
