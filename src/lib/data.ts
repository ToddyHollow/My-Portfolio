import { source } from "framer-motion/client";
import { Ambulance } from "lucide-react";

export const personalInfo = {
  name: "A. Adel Knode ",
  location: "Tulsa, Oklahoma",
  email: "adel.knode@gmail.com",
  github: "https://github.com/ToddyHollow/TaskCom",
  //linkedin: "https://www.linkedin.com/in/adelknode/",//
};

export const workExperience = [
  {
    company: "L&J Environmental",
    location: "Oklahoma",
    position: "Owner/Environmental Manager/Field Technician",
    period: "Dec 2018 - Present",
    achievements: ["Started as a driver at an environmental lab — left four years later knowing how to build and operate a DEQ-certified field laboratory. Zero formal training, just curiosity and commitment. This is pattern that has defined my career."
    ],
  },
  
];

export const education = [
  {
    institution: "Atlas School",
    location: "Tulsa, Okloahoma",
    degree: "Full-Stack Web Development",
    period: "Jan 2023 - Apr 2025",
  },
];
export const skills = {
  programmingLanguages: [
    "TypeScript",
    "JavaScript",
    "Java",

  ],
  frontendDevelopment: [
    "Nextjs",
    "Reactjs",
    "React Native",
    "Tailwind CSS",
    "HTML",
    "CSS",
  ],
  backendDevelopment: ["Nodejs", "Expressjs"],
  databaseAndStorage: ["PostgreSQL",],
  
};

export const projects = [
  {
title: "Tulsa Community College Final Assignment - Architectural Residential Duplex",
    github: "",
    pdf: "/pdfs/knodeann-phase6.pdf",
    images: [
      {
        src: "/images/knodeann/knodeann-page-1.jpg",
        caption: "Page 1 - The structure rendered. ",
      },
      {
        src: "/images/knodeann/knodeann-page-2.jpg",
        caption: "Page 2 - This is the floorplan after several markups by the instructor. ",
      },
      {
        src: "/images/knodeann/knodeann-page-3.jpg",
        caption: "Page 3 - Sections and elevations were for the purpose of learning how to control those views and not for gained information.",
      },
      {
        src: "/images/knodeann/knodeann-page-4.jpg",
        caption: "Sections and elevations were for the purpose of learning how to control those views and not for gained information.",
      },
      {
        src: "/images/knodeann/knodeann-page-5.jpg",
        caption: "This is the details page.  All of these are drawing view, and reverted back to AutoCAD style drafting.",
      },
    ],
    description: [
      "A simple 2-story structure modeled in Autodesk Revit as a final project for Tulsa Community College. The project includes a full 3D model alongside detail views created in Revit's drafting mode — bridging traditional AutoCAD-style drafting with modern BIM workflows.",
    ],
  },
  {
    title: "Project 2 - Coming Soon",
    github: "",
    pdf: "",
    description: [
      "Placeholder for next Revit project.",
    ],
  },
  {
    title: "Project 3 - Coming Soon",
    github: "",
    pdf: "",
    description: [
      "Placeholder for next Revit project.",
    ],
  },
];

export const awards = [
  {
    name: "IEEE YESIST12 Hackathon",
    issuer: "IEEE",
    date: "Sep 2022",
    type: "International",
    position: "Second Place",
  },
  {
    name: "Prodigi Cognizant Hackathon",
    issuer: "Cognizant",
    date: "Feb 2023",
    type: "National",
    position: "Second Runner-up",
  },
  {
    name: "Cisco Thingqbator Hackathon",
    issuer: "Cisco",
    date: "Jan 2023",
    type: "National",
    position: "First Runner-up",
  },
  {
    name: "Innovators Day",
    issuer: "Sri Manakula Vinayagar Engineering College, Pondicherry",
    date: "Sep 2022",
    type: "National",
    position: "First Prize",
  },
  {
    name: "KG Hackfest'22",
    issuer: "KGiSL Institute of Technology, Coimbatore",
    date: "Sep 2022",
    type: "National",
    position: "Second Prize",
  },
  {
    name: "Innohacks'22",
    issuer: "Innogeeks, KIET Group of Institutions, New Delhi",
    date: "May 2022",
    type: "National",
    position: "Second Runner-up",
  },
  {
    name: "Hack @ SKCET",
    issuer: "Hackclub SKCET, SKCET, Coimbatore",
    date: "Feb 2022",
    type: "National",
    position: "Most Impactful Hack",
  },
];
