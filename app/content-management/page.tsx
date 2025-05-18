import Content from "@/components/content";
import Sidebar from "@/components/content-sidebar";
import Head from "next/head"; // Import Head for setting the page title
import React from "react";
import Info from "@/components/info"; // Import Info component if needed
import { SectionProvider } from "@/context/SectionContext";

const page = () => {
  return (
    <>
      <Head>
        <title>Content Management</title> {/* Set the page title here */}
      </Head>
      <div>
        <div className="flex h-12 w-full border justify-between px-3 items-center ">
          <div className="flex items-center gap-4 text-sm">
            <p>P-NAME</p>
            <p className="p-1 bg-green-200 rounded-sm font-semibold">
              PUBLISHED
            </p>
          </div>
          <span className="w-8 h-8 border border-black rounded-full bg-gray-300"></span>
        </div>
        <div className="flex">
          <SectionProvider>
            <Sidebar />
            <Content />
            <Info />
          </SectionProvider>
        </div>
      </div>
    </>
  );
};

export default page;
