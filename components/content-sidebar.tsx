import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col max-w-[20rem] min-h-sm max-h-md border-r border-gray-300 px-4 pt-4">
      <div>
            <p className="text-gray-400">Hero</p>

            <Accordion type="single" collapsible className = "w-fit">
                <AccordionItem value="item-1" className="px-3">
                    <AccordionTrigger>Portfolio-Hero</AccordionTrigger>
                    <AccordionContent >
                    <p>Role</p>
                    </AccordionContent>

                    <AccordionContent>
                    <p>Social Media</p>
                    </AccordionContent>

                    <AccordionContent>
                    <p>Resume</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
      </div>

      <div>
            <p className="text-gray-400">About</p>

            <Accordion type="single" collapsible className = "w-fit">
            <AccordionItem value="item-1" className = "px-3">
                <AccordionTrigger>Portfolio-About</AccordionTrigger>
                <AccordionContent>
                <p>Paragraph 1</p>
                </AccordionContent>

                <AccordionContent>
                <p>Technologies</p>
                </AccordionContent>

                <AccordionContent>
                <p>Paragraph 2</p>
                </AccordionContent>
            </AccordionItem>
            </Accordion>
      </div>

      <div>
            <p className = "text-gray-400">Experience</p>

            <Accordion type="single" collapsible className = "w-fit hover:no-underline">
            <AccordionItem value="item-1" className = "px-3">
                <AccordionTrigger>Portfolio-Experience</AccordionTrigger>
                <AccordionContent>
                <p>Companies</p>
                </AccordionContent>

                <AccordionContent>
                <p>Role</p>
                </AccordionContent>

                <AccordionContent>
                <p>Duration</p>
                </AccordionContent>

                <AccordionContent>
                    <p>Impact</p>
                </AccordionContent>
            </AccordionItem>
            </Accordion>
      </div>

      <div>
            <p className = "text-gray-400">Services</p>

            <Accordion type="single" collapsible className = "w-fit">
            <AccordionItem value="item-1" className = "px-3">
                <AccordionTrigger>Portfolio-Services</AccordionTrigger>
                <AccordionContent>
                <p>Service</p>
                </AccordionContent>

                <AccordionContent>
                <p>Description</p>
                </AccordionContent>

            </AccordionItem>
            </Accordion>
      </div>

      <div>
            <p className = "text-gray-400">Projects</p>

            <Accordion type="single" collapsible className = "w-fit">
            <AccordionItem value="item-1" className = "px-3">
                <AccordionTrigger>Portfolio-Projects</AccordionTrigger>
                <AccordionContent>
                <p>Project Name</p>
                </AccordionContent>

                <AccordionContent>
                <p>Description</p>
                </AccordionContent>

                <AccordionContent>
                <p>Technologies</p>
                </AccordionContent>

                <AccordionContent>
                    <p>References</p>
                </AccordionContent>
            </AccordionItem>
            </Accordion>
      </div>

      <div>
            <p className = "text-gray-400">Testimonials</p>

            <Accordion type="single" collapsible className = "w-fit">
            <AccordionItem value="item-1" className = "px-3">
                <AccordionTrigger>Portfolio-Testimonials</AccordionTrigger>
                <AccordionContent>
                <p>Name</p>
                </AccordionContent>

                <AccordionContent>
                <p>Testimonial</p>
                </AccordionContent>

                <AccordionContent>
                <p>Image</p>
                </AccordionContent>

                <AccordionContent>
                    <p>Organization</p>
                </AccordionContent>
            </AccordionItem>
            </Accordion>
      </div>

      <div>
            <p className = "text-gray-400">Contact</p>

            <Accordion type="single" collapsible className = "w-fit">
            <AccordionItem value="item-1" className = "px-3">
                <AccordionTrigger>Portfolio-Contact</AccordionTrigger>
                <AccordionContent>
                <p>Phone Number</p>
                </AccordionContent>

                <AccordionContent>
                <p>Email</p>
                </AccordionContent>

                <AccordionContent>
                <p>Address</p>
                </AccordionContent>
            </AccordionItem>
            </Accordion>
      </div>
    </div>
  );
}

export default Sidebar