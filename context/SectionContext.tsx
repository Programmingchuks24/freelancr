"use client"
import React, { createContext, useContext, useState } from "react";

type Section =
  | "Hero"
  | "About"
  | "Experience"
  | "Services"
  | "Projects"
  | "Testimonials"
  | "Contact"
  | "Image";

interface SectionContextType {
  section: Section;
  setSection: (section: Section) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const SectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [section, setSection] = useState<Section>("Hero");
  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  const context = useContext(SectionContext);
  if (!context)
    throw new Error("useSection must be used within SectionProvider");
  return context;
};
