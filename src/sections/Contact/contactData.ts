export interface ContactInfo {
  title: string;
  value: string;
  href: string;
  type: "email" | "phone" | "location" | "linkedin" | "github";
}

export const contactData: ContactInfo[] = [
  {
    title: "Email",
    value: "vineethpl17@gmail.com",
    href: "mailto:vineethpl17@gmail.com",
    type: "email",
  },

  {
    title: "Phone",
    value: "+91 9952506212",
    href: "tel:+919952506212",
    type: "phone",
  },

  {
    title: "Location",
    value: "Tamil Nadu, India",
    href: "#",
    type: "location",
  },

  {
    title: "LinkedIn",
    value: "Mariappan P",
    href: "https://www.linkedin.com/in/mariappan-petchiappan-7bb65019b",
    type: "linkedin",
  },
];