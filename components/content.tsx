"use client"
import React, {useRef} from 'react'
import { useState } from 'react';

import {Input} from "@/components/ui/input"
import { ALargeSmall, BriefcaseBusiness, BriefcaseBusinessIcon, CalendarDays, FileText, TableOfContents } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { Link2 } from 'lucide-react';
import { CloudUpload } from 'lucide-react';
import { FileUp } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea"
import { Type } from 'lucide-react';
import { SquareTerminal } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { Building2 } from 'lucide-react';
import { Plus } from 'lucide-react';

const Content = () => {

  
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  // const [isOpen3, setIsOpen3] = useState(false);
  // const [isOpen4, setIsOpen4] = useState(false);


  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle the selected file(s)
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      console.log('Selected file:', file);
      // You can perform further actions with the selected file here
    }
  };
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 pb-3 max-w-[80rem]">

      {isOpen && (

        <div className="fixed inset-0 bg-slate-500/50 flex items-center justify-center z-50" >
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-lg font-semibold">Insert Link</h2>
            <div>
              <p className="text-sm">Insert your link here</p>
              <Input className="w-full mt-2" placeholder="https://example.com" />
            </div>
            <button onClick={() => setIsOpen(false)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-400">Insert</button>
          </div>
        </div>
      )}

      {isOpen2 && (
        <div className="fixed inset-0 bg-slate-500/50 flex items-center justify-center z-50" onClick={() => setIsOpen2(false)}>
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-lg font-semibold">Upload Resume</h2>
            <button type="button" onClick={handleButtonClick} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-400">Insert</button>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>
      )}
      <div className="text-sm mt-3">
        <p className="font-semibold text-lg">Hero</p>

        <div className="max-w-md min-w-[24rem] h-[20rem] border border-gray-300 shadow-md px-3 gap-2 rounded-lg">
          <p className="p-3 bg-red-100 -mx-3 text-md">Section: Hero <span className = "text-gray-400">(Portfolio-Hero)</span></p>

          <div className="flex items-center gap-2 mt-5">
            <ALargeSmall className="w-5" />
            <p>Role</p>
          </div>

          <Input className="w-full" />

          <div className = "flex flex-col gap-2">
                <div className="flex items-center gap-2 mt-5">
                    <UserRound className="w-5" />
                    <p>Social Media</p>
                </div>

                <span className = "flex gap-3 border-2 w-fit items-center px-3 rounded-sm cursor-pointer" onClick={()=>setIsOpen(true)}><p className = "text-sm font-semibold hover:font-normal">Insert Link</p> <Link2 className = "w-4"/></span>
          </div>

          <div className = "flex flex-col gap-2">
                <div className="flex items-center gap-2 mt-5" >
                  <FileUp className="w-5" />
                  <p>Resume</p>
                </div>

                <span className = "flex gap-3 border-2 w-fit items-center px-3 rounded-sm cursor-pointer" onClick={()=>setIsOpen2(true)}><p className = "text-sm font-semibold hover:font-normal">Upload Resume</p> <CloudUpload className = "w-4"/></span>
          </div>
        </div>
      </div>

      <div className=" text-sm mt-3">
        <p className="font-semibold text-lg">About</p>

        <div className="max-w-md min-w-[24rem] h-fit pb-3 border border-gray-300 shadow-md px-3 gap-2 rounded-lg">
          <p className="p-3 bg-red-100 -mx-3 text-md">Section: About <span className = "text-gray-400">(Portfolio-About)</span></p>

          <div className="flex items-center gap-2 mt-5">
            <Type className="w-5" />
            <p>Paragraph 1</p>
          </div>

          <Textarea/>

          <div className = "flex flex-col gap-2">
                <div className="flex items-center gap-2 mt-5">
                    <SquareTerminal className="w-5" />
                    <p>Technologies</p>
                </div>

                <span className = "flex gap-3 border-2 w-fit items-center px-3 rounded-sm cursor-pointer"><p className = "text-sm font-semibold hover:font-normal">Select Technologies</p> <ChevronDown className = "w-4"/></span>
          </div>

          <div className = "flex flex-col gap-2">
                <div className="flex items-center gap-2 mt-5">
                    <Type className="w-5" />
                    <p>Paragraph</p>
                </div>

                <Textarea/>
          </div>
        </div>
      </div>

      <div className=" text-sm mt-3">
        <p className="font-semibold text-lg">Experience</p>

        <div className="max-w-md min-w-[24rem] h-fit border border-gray-300 shadow-md px-3 pb-3 gap-2 rounded-lg">
          <p className="p-3 bg-red-100 -mx-3 text-md">Section: Experience <span className = "text-gray-400">(Portfolio-Experience)</span></p>

          <div className="flex items-center gap-2 mt-5 mb-3">
            <Building2 className="w-5" />
            <p>Companies</p>
          </div>

          <span className = "flex gap-3 border-2 w-fit items-center px-3 rounded-sm cursor-pointer"><p className = "text-sm font-semibold hover:font-normal">Previous Workplace</p> <Plus className = "w-4"/></span>

          <div className = "flex flex-col gap-3">
                <div className="flex items-center gap-2 mt-5">
                    <BriefcaseBusiness className="w-5" />
                    <p>Role</p>
                </div>

                <span className = "flex gap-3 border-2 w-fit items-center px-3 rounded-sm cursor-pointer"><p className = "text-sm font-semibold hover:font-normal">Role</p> <ChevronDown className = "w-4"/></span>
          </div>

          <div className = "flex flex-col gap-2">
                <div className="flex items-center gap-2 mt-5">
                    <CalendarDays className="w-5" />
                    <p>Duration</p>
                </div>

                <div className = "flex gap-2">
                    <span className = "flex gap-3 border-1 border-black w-fit items-center px-3 rounded-sm cursor-pointer"><p className = "text-sm font-semibold hover:font-normal">Workplace</p> <p className = "text-sm font-semibold hover:font-normal border-l-2 px-2">dd/mm/yy</p><ChevronDown className = "w-4"/></span>

                    <span className = "border-1 p-1 border-black rounded-sm"><Plus className = "w-5"/></span>
                </div>   
          </div>

          <div className = "flex flex-col gap-2">
                <div className="flex items-center gap-2 mt-5">
                    <TableOfContents className="w-5" />
                    <p>Impact</p>
                </div>

                <span className = "flex gap-3 border-1 border-black w-fit items-center px-3 rounded-sm cursor-pointer"><p className = "text-sm font-semibold hover:font-normal">Achievements</p><Plus className = "w-4"/></span>                  
          </div>

        </div>
      </div>

      <div className=" text-sm mt-3">
        <p className="font-semibold text-lg">Services</p>

        <div className="max-w-md min-w-[24rem] h-[20rem] border border-gray-300 shadow-md px-3 gap-2 rounded-lg">
          <p className="p-3 bg-red-100 -mx-3 text-md">Section: Services <span className = "text-gray-400">(Portfolio-Services)</span></p>

          <div className="flex items-center gap-2 mt-5 mb-3">
            <BriefcaseBusinessIcon className="w-5" />
            <p>Services</p>
          </div>

          <span className = "flex gap-3 border-1 border-black w-fit items-center px-3 rounded-sm cursor-pointer"><p className = "text-sm font-semibold hover:font-normal">Services</p><Plus className = "w-4"/></span>                  

          <div className = "flex flex-col gap-2">
                <div className="flex items-center gap-2 mt-5">
                    <FileText className="w-5" />
                    <p>Descriptions</p>
                </div>

                <Textarea placeholder="Describe yourself"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;