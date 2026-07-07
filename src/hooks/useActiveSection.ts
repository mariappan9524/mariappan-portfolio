import { useState } from "react";

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("about");

  return {
    activeSection,
    setActiveSection,
  };
}