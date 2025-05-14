"use client";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { Text } from "lucide-react";
import {Input} from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {User} from "lucide-react";
import {Link} from "lucide-react";
export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <p className="font-bold">Hero</p>

          <div className="max-w-sm max-h-md bg-transparent rounded-lg shadow-md p-4 flex flex-col gap-6">
            <div>
              <div className="flex gap-2 items-center">
                <Text className="w-4 h-4 text-gray-500" />
                <Label className="text-sm font-medium text-gray-700">
                  Role
                </Label>
              </div>
              <Input type="text" />
            </div>

            <div>
              <div className="flex gap-2">
                <User className="w-4 h-4 text-gray-500" />
                <Label className="text-sm font-medium text-gray-700">
                  Links
                </Label>
              </div>
              <p className = "max-w-fit p-0.5 pr-1 pl-1 border flex items-center gap-3 text-xs rounded-md shadow-sm font-bold">Insert Links <Link className="w-3 h-3 text-gray-500"/></p>
            </div>

            <div>
              <div className="flex gap-2">
                <User className="w-4 h-4 text-gray-500" />
                <Label className="text-sm font-medium text-gray-700">
                  Resume
                </Label>
              </div>
              <p className = "max-w-fit p-0.5 pr-1 pl-1 border flex items-center gap-3 text-xs rounded-md shadow-sm font-bold cursor-pointer">Upload Resume <Link className="w-3 h-3 text-gray-500"/></p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <p className="font-bold">Hero</p>

          <div className="max-w-sm max-h-md bg-transparent rounded-lg shadow-md p-4 flex flex-col gap-6">
            <div>
              <div className="flex gap-2 items-center">
                <Text className="w-4 h-4 text-gray-500" />
                <Label className="text-sm font-medium text-gray-700">
                  Role
                </Label>
              </div>
              <Input type="text" />
            </div>

            <div>
              <div className="flex gap-2">
                <User className="w-4 h-4 text-gray-500" />
                <Label className="text-sm font-medium text-gray-700">
                  Links
                </Label>
              </div>
              <p className = "max-w-fit p-0.5 pr-1 pl-1 border flex items-center gap-3 text-xs rounded-md shadow-sm font-bold">Insert Links <Link className="w-3 h-3 text-gray-500"/></p>
            </div>

            <div>
              <div className="flex gap-2">
                <User className="w-4 h-4 text-gray-500" />
                <Label className="text-sm font-medium text-gray-700">
                  Resume
                </Label>
              </div>
              <p className = "max-w-fit p-0.5 pr-1 pl-1 border flex items-center gap-3 text-xs rounded-md shadow-sm font-bold">Upload Resume <Link className="w-3 h-3 text-gray-500"/></p>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
