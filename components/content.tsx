"use client"
import React, {useRef} from 'react'
import { useState } from 'react';
import { useSection } from '@/context/SectionContext';

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
  const { section } = useSection();

  
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [isWorkplaceModalOpen, setIsWorkplaceModalOpen] = useState(false);
  const [workplace, setWorkplace] = useState("");
  const [workplaceDate, setWorkplaceDate] = useState("");
  const [savedWorkplace, setSavedWorkplace] = useState<{ name: string; date: string } | null>(null);
  //const [link, setSavedLink] = useState<string | null>(null);

  const techOptions = [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Flask",
    "Django",
    "TypeScript",
  ];

  const handleSelectTech = (tech: string) => {
    setSelectedTech(tech);
    setIsDropdownOpen(false);
  };

  const handleSaveWorkplace = () => {
    setSavedWorkplace({ name: workplace, date: workplaceDate });
    setIsWorkplaceModalOpen(false);
    setWorkplace("");
    setWorkplaceDate("");
  };



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
    }
  };

  const handleinsertclick = () => {

  }
    
  return (
    <div className="gap-12 px-4 pb-3 w-[60rem]">
      {isOpen && (
        <div className="fixed inset-0 bg-slate-500/50 flex items-center justify-center z-50">
          <div className=" relative bg-white p-4 rounded shadow-lg">
            <span className = " absolute text-black top-3 right-2 cursor-pointer text-base hover:text-slate-300" onClick={() => setIsOpen(false)}>×</span>
            <h2 className="text-lg font-semibold">Insert Link</h2>
            <div>
              <p className="text-sm">Insert your link here</p>
              <Input
                className="w-full mt-2"
                placeholder="https://example.com"
              />
            </div>
            <button
              onClick={handleinsertclick}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-400"
            >
              Insert
            </button>
          </div>
        </div>
      )}

      {isOpen2 && (
        <div
          className="fixed inset-0 bg-slate-500/50 flex items-center justify-center z-50"
          onClick={() => setIsOpen2(false)}
        >
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-lg font-semibold">Upload Resume</h2>
            <button
              type="button"
              onClick={handleButtonClick}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-400"
            >
              Insert
            </button>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>
      )}

      {isDropdownOpen && (
        <div className="fixed inset-0 bg-slate-500/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg min-w-[250px]">
            <h2 className="text-lg font-semibold mb-4">Select Technology</h2>
            <ul>
              {techOptions.map((tech) => (
                <li
                  key={tech}
                  className="py-2 px-4 hover:bg-blue-100 cursor-pointer rounded"
                  onClick={() => handleSelectTech(tech)}
                >
                  {tech}
                </li>
              ))}
            </ul>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
              onClick={() => setIsDropdownOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {isWorkplaceModalOpen && (
        <div className="fixed inset-0 bg-slate-500/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg min-w-[300px]">
            <h2 className="text-lg font-semibold mb-4">Add Workplace</h2>
            <div className="flex flex-col gap-4">
              <input
                className="border p-2 rounded"
                placeholder="Workplace Name"
                value={workplace}
                onChange={(e) => setWorkplace(e.target.value)}
              />
              <input
                className="border p-2 rounded"
                placeholder="Date (e.g. 01/01/2024)"
                value={workplaceDate}
                onChange={(e) => setWorkplaceDate(e.target.value)}
              />
              <div className="flex gap-2 justify-end">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
                  onClick={handleSaveWorkplace}
                >
                  Save
                </button>
                <button
                  className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                  onClick={() => setIsWorkplaceModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {section === "Hero" && (
        <div className="text-sm mt-3 w-full">
        <p className="font-semibold text-lg">Hero</p>

        <div className="w-full h-[20rem] border border-gray-300 shadow-md px-3 gap-2 rounded-lg">
          <p className="p-3 bg-red-100 -mx-3 text-md">
            Section: Hero{" "}
            <span className="text-gray-400">(Portfolio-Hero)</span>
          </p>

          <div className="flex items-center gap-2 mt-5">
            <ALargeSmall className="w-5" />
            <p>Role</p>
          </div>

          <Input className="w-full" />

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mt-5">
              <UserRound className="w-5" />
              <p>Social Media</p>
            </div>

            <span
              className="flex gap-3 border-2 w-fit items-center px-3 rounded-sm cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <p className="text-sm font-semibold hover:font-normal">
                Insert Link
              </p>{" "}
              <Link2 className="w-4" />
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mt-5">
              <FileUp className="w-5" />
              <p>Resume</p>
            </div>

            <span
              className="flex gap-3 border-2 w-fit items-center px-3 rounded-sm cursor-pointer"
              onClick={() => setIsOpen2(true)}
            >
              <p className="text-sm font-semibold hover:font-normal">
                Upload Resume
              </p>{" "}
              <CloudUpload className="w-4" />
            </span>
          </div>
        </div>
      </div>
      )}

      {section === "About" && (
        <div className=" text-sm mt-3 w-full">
        <p className="font-semibold text-lg">About</p>

        <div className="w-full h-[20rem] pb-3 border border-gray-300 shadow-md px-3 gap-2 rounded-lg">
          <p className="p-3 bg-red-100 -mx-3 text-md">
            Section: About{" "}
            <span className="text-gray-400">(Portfolio-About)</span>
          </p>

          <div className="flex items-center gap-2 mt-5">
            <Type className="w-5" />
            <p>Paragraph 1</p>
          </div>

          <Textarea />

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mt-5">
              <SquareTerminal className="w-5" />
              <p>Technologies</p>
            </div>

            <span
              className="flex gap-3 border-2 w-fit items-center px-3 rounded-sm cursor-pointer"
              onClick={() => setIsDropdownOpen(true)}
            >
              <p className="text-sm font-semibold hover:font-normal">
                {selectedTech ? selectedTech : "Select Technologies"}
              </p>{" "}
              <ChevronDown className="w-4" />
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mt-5">
              <Type className="w-5" />
              <p>Paragraph</p>
            </div>

            <Textarea />
          </div>
        </div>
      </div>

      )}

      {section === "Experience" && (
          <div className=" text-sm mt-3 w-full">
            <p className="font-semibold text-lg">Experience</p>

            <div className="w-full h-[20rem] border border-gray-300 shadow-md px-3 pb-3 gap-2 rounded-lg">
              <p className="p-3 bg-red-100 -mx-3 text-md">
                Section: Experience{" "}
                <span className="text-gray-400">(Portfolio-Experience)</span>
              </p>

              <div className="flex items-center gap-2 mt-5 mb-3">
                <Building2 className="w-5" />
                <p>Companies</p>
              </div>

              <span
                className="flex gap-3 border-2 w-fit items-center px-3 rounded-sm cursor-pointer"
                onClick={() => setIsWorkplaceModalOpen(true)}
              >
                <p className="text-sm font-semibold hover:font-normal">
                  {savedWorkplace ? savedWorkplace.name : "Previous Workplace"}
                </p>
                <Plus className="w-4" />
              </span>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 mt-5">
                  <BriefcaseBusiness className="w-5" />
                  <p>Role</p>
                </div>

                <span className="flex gap-3 border-2 w-fit items-center px-3 rounded-sm cursor-pointer">
                  <p className="text-sm font-semibold hover:font-normal">Role</p>{" "}
                  <ChevronDown className="w-4" />
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 mt-5">
                  <CalendarDays className="w-5" />
                  <p>Duration</p>
                </div>

                <div className="flex gap-2">
                  <span
                    className="flex gap-3 border-1 border-black w-fit items-center px-3 rounded-sm cursor-pointer"
                    onClick={() => setIsWorkplaceModalOpen(true)}
                  >
                    <p className="text-sm font-semibold hover:font-normal">
                      {savedWorkplace ? savedWorkplace.name : "Workplace"}
                    </p>
                    <p className="text-sm font-semibold hover:font-normal border-l-2 px-2">
                      {savedWorkplace ? savedWorkplace.date : "dd/mm/yy"}
                    </p>
                    <ChevronDown className="w-4" />
                  </span>

                  <span className="border-1 p-1 border-black rounded-sm">
                    <Plus className="w-5" />
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 mt-5">
                  <TableOfContents className="w-5" />
                  <p>Impact</p>
                </div>

                <span className="flex gap-3 border-1 border-black w-fit items-center px-3 rounded-sm cursor-pointer">
                  <p className="text-sm font-semibold hover:font-normal">
                    Achievements
                  </p>
                  <Plus className="w-4" />
                </span>
              </div>
            </div>
          </div>
      )}

      {section === "Services" && (

        <div className=" text-sm mt-3 w-full">
          <p className="font-semibold text-lg">Services</p>

          <div className="w-full h-[20rem] border border-gray-300 shadow-md px-3 gap-2 rounded-lg">
            <p className="p-3 bg-red-100 -mx-3 text-md">
              Section: Services{" "}
              <span className="text-gray-400">(Portfolio-Services)</span>
            </p>

            <div className="flex items-center gap-2 mt-5 mb-3">
              <BriefcaseBusinessIcon className="w-5" />
              <p>Services</p>
            </div>

            <span className="flex gap-3 border-1 border-black w-fit items-center px-3 rounded-sm cursor-pointer">
              <p className="text-sm font-semibold hover:font-normal">Services</p>
              <Plus className="w-4" />
            </span>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 mt-5">
                <FileText className="w-5" />
                <p>Descriptions</p>
              </div>

              <Textarea placeholder="Describe yourself" />
            </div>
          </div>
        </div>
      )}

      {section === "Contact" && (
        <div className="text-sm mt-3 w-full">
          <p className="font-semibold text-lg">Contact</p>

          <div className="w-full h-[20rem] border border-gray-300 shadow-md px-3 gap-2 rounded-lg">
            <p className="p-3 bg-red-100 -mx-3 text-md">
              Section: Contact{" "}
              <span className="text-gray-400">(Portfolio-Contact)</span>
            </p>

            <div className="flex items-center gap-2 mt-5 mb-3">
              <FileText className="w-5" />
              <p>Phone Number</p>
            </div>
            <Input className="w-full" placeholder="Enter your phone number" />

            <div className="flex items-center gap-2 mt-5 mb-3">
              <FileText className="w-5" />
              <p>Email</p>
            </div>
            <Input className="w-full" placeholder="Enter your email address" />

            <div className="flex items-center gap-2 mt-5 mb-3">
              <FileText className="w-5" />
              <p>Address</p>
            </div>
            <Textarea className="w-full" placeholder="Enter your address" />
          </div>
        </div>
      )}

      {section === "Projects" && (
        <div className="text-sm mt-3 w-full">
          <p className="font-semibold text-lg">Projects</p>
          <div className="w-full h-[20rem] border border-gray-300 shadow-md px-3 gap-2 rounded-lg">
            <p className="p-3 bg-red-100 -mx-3 text-md">
              Section: Projects{" "}
              <span className="text-gray-400">(Portfolio-Projects)</span>
            </p>
      
            <div className="flex items-center gap-2 mt-5 mb-3">
              <FileText className="w-5" />
              <p>Project Name</p>
            </div>
            <Input className="w-full" placeholder="Enter your project name" />
      
            <div className="flex items-center gap-2 mt-5 mb-3">
              <FileText className="w-5" />
              <p>Description</p>
            </div>
            <Textarea className="w-full" placeholder="Describe your project" />
      
            <div className="flex items-center gap-2 mt-5 mb-3">
              <FileText className="w-5" />
              <p>Technologies</p>
            </div>
            <Input className="w-full" placeholder="Technologies used" />
      
            <div className="flex items-center gap-2 mt-5 mb-3">
              <FileText className="w-5" />
              <p>References</p>
            </div>
            <Input className="w-full" placeholder="Project references or links" />
          </div>
        </div>
      )}
      
      {section === "Testimonials" && (
        <div className="text-sm mt-3 w-full">
          <p className="font-semibold text-lg">Testimonials</p>
          <div className="w-full h-[20rem] border border-gray-300 shadow-md px-3 gap-2 rounded-lg">
            <p className="p-3 bg-red-100 -mx-3 text-md">
              Section: Testimonials{" "}
              <span className="text-gray-400">(Portfolio-Testimonials)</span>
            </p>
      
            <div className="flex items-center gap-2 mt-5 mb-3">
              <FileText className="w-5" />
              <p>Name</p>
            </div>
            <Input className="w-full" placeholder="Enter name" />
      
            <div className="flex items-center gap-2 mt-5 mb-3">
              <FileText className="w-5" />
              <p>Testimonial</p>
            </div>
            <Textarea className="w-full" placeholder="Enter testimonial" />
      
            <div className="flex items-center gap-2 mt-5 mb-3">
              <FileText className="w-5" />
              <p>Image</p>
            </div>
            <Input className="w-full" placeholder="Image URL or upload" />
      
            <div className="flex items-center gap-2 mt-5 mb-3">
              <FileText className="w-5" />
              <p>Organization</p>
            </div>
            <Input className="w-full" placeholder="Organization" />
          </div>
        </div>
      )}
      
      {section === "Image" && (
        <div className="text-sm mt-3 w-full">
          <p className="font-semibold text-lg">Image</p>
          <div className="w-full h-[20rem] border border-gray-300 shadow-md px-3 gap-2 rounded-lg">
            <p className="p-3 bg-red-100 -mx-3 text-md">
              Section: Image{" "}
              <span className="text-gray-400">(Portfolio-Image)</span>
            </p>
      
            <div className="flex items-center gap-2 mt-5 mb-3">
              <FileText className="w-5" />
              <p>Phone Number</p>
            </div>
            <Input className="w-full" placeholder="Enter your phone number" />
      
            <div className="flex items-center gap-2 mt-5 mb-3">
              <FileText className="w-5" />
              <p>Email</p>
            </div>
            <Input className="w-full" placeholder="Enter your email address" />
      
            <div className="flex items-center gap-2 mt-5 mb-3">
              <FileText className="w-5" />
              <p>Address</p>
            </div>
            <Textarea className="w-full" placeholder="Enter your address" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Content;