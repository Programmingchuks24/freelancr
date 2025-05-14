import React from 'react'
import { ChevronDown } from 'lucide-react';
import { SquareArrowOutUpRight } from 'lucide-react';


const Info = () => {
  return (
    <div className = "border-l border-gray-300 max-w-[15px] px-10 pt-3 flex flex-col gap-[18rem]">
        <div className = "text-sm whitespace-nowrap">

            <p className = "font-semibold">PAGE INFORMATION</p>
            <p><span className = "font-semibold">Created:</span> 12th March 2022</p>
            <p><span className="font-semibold">Last Updated:</span> 4 months ago</p>
        </div>


        <div className="flex flex-col gap-3" >
        {/* <Accordion type="single" collapsible className = "w-fit bg-blue-500 text-white h-fit">
                <AccordionItem value="item-1" className="px-3 ">
                    <AccordionTrigger>Preview</AccordionTrigger>
                    <AccordionContent >
                    <p>Role</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion> */}

            <div className = " w-[12.4rem] px-2 h-fit bg-blue-500 shadow-md flex items-center justify-between text-white text-sm hover:shadow-none hover:bg-blue-400 hover:cursor-pointer">
                <p>Preview</p>
                
                <ChevronDown/>
            </div>

            <div className = "flex items-center border border-black justify-between w-[12.4rem] h-fit px-2 text-sm hover:bg-slate-800 hover:border-none hover:text-white hover:cursor-pointer">

                <SquareArrowOutUpRight className="w-[14px]"/>

                <p>PUBLISH</p>
                
            </div>
        </div>
    </div>
  )
}

export default Info