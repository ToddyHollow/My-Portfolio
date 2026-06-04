import { source } from "framer-motion/client";
import { Ambulance } from "lucide-react";

export const personalInfo = {
  name: "A. Adel Knode ",
  location: "Tulsa, Oklahoma",
  email: "adel.knode@gmail.com",
  github: "https://github.com/ToddyHollow/My-Portfolio",
  //linkedin: "https://www.linkedin.com/in/adelknode/",//
};

export const workExperience = [
  {
    company: "L&J Environmental",
    location: "Oklahoma",
    position: "Owner/Environmental Manager/Field Technician",
    period: "Dec 2018 - Present",
    achievements: ["I started as a driver at an environmental lab — I left four years later knowing how to build and operate a DEQ-certified field laboratory. Zero formal training on that topic, just curiosity and commitment. This is pattern that has defined my career."
    ],
  },
  
];

export const education = [
  {
    institution: "OKState",
    location: "Stillwater, Oklahoma",
    degree: "BSMET and PSM-Environmental Management",
    period: "forever-- and DONE",
  },
  {
    institution: "Tulsa Community College",
    location: "Tulsa, OK",
    degree: "Architectural Revit - Basic",
    period: "Spring Semester 2026",
  },
];
export const skills = {
  programmingLanguages: [
    "AutoCAD"
   

  ],
  frontendDevelopment: [
    
  ],
  backendDevelopment: [""],
  databaseAndStorage: ["",],
  
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
export const constructionProjects = [
  {
    title: "Boone Pickens Stadium — Phase I",
    slug: "boone-pickens-stadium",
    type: "Athletic Facility",
    role: "HVAC Field Installer -- Journeyman",
    value: "$47M",
    location: "OSU Stillwater, OK",
    period: "Summer 2004",
    images: [
      {
        src: "/images/construction/PICKENS-CONSTRUCTION.jpg",
        caption: "Boone Pickens Stadium Phase 1 as the transformation began",
      },
      {
        src: "/images/construction/BOONEPICKENS.webp",
        caption: "Welcome to Boone Pickens Stadium — all phases complete.",
      },
    ],
    description: [
      "First job runnning ductwork -- ever.",
      "Discovered that blueprints are easy to understand, and offset sheetmetal snips are not.",
      "Gained early exposure to large-scale project coordination and trade sequencing.",
      "As an Apprentice Level/ Card carrying Journeyman everyone was glad to share information -- the learning curve was steep",
    ],
  },
  {
    title: "NSU Science Center",
    slug: "nsu-science-center",
    type: "Education",
    role: "HVAC Field Installer",
    value: "",
    location: "Northeastern State University, Tahlequah, OK",
    period: "2005–2006",
    image: "",
    description: [
      "62,000 sq ft facility housing 26 laboratory spaces.",
      "Coordinated structural blockout requirements with general contractor to accommodate prefabricated stainless steel exhaust components.",
    ],
  },
  {
    title: "Rosa Parks Elementary School",
    slug: "rosa-parks-elementary",
    type: "Education",
    role: "HVAC Site Lead",
    value: "",
    location: "Union Public Schools District, Tulsa, OK",
    period: "2006",
images: [
  {
    src: "/images/construction/rosaParksfrontdoor.jpg",
    caption: "Rosa Parks Elementary School — Union Public Schools District, Tulsa, OK",
  },
  {
    src: "/images/construction/rosaparks.jpg",
    caption: "Photo credit Dewberry Engineering",
  },
],    description: [
      "I worked at multiple sites during this time. I would arrive for a few weeks be reassigned, and then come back.  Evntually it was my responsibility to work through the punch list and escort the inspectors.",
      "I was asked to start-up the 52 rooftop units on this structure. My AAON experience was invaluable."
      
    ],
  },
  {
    title: "Community Food Bank of Eastern Oklahoma",
    slug: "community-food-bank",
    type: "Warehouse & Office",
    role: "HVAC Field Installer",
    value: "",
    location: "Tulsa, OK",
    period: "",
    image: "",
    description: [
      "78,000 sq ft warehouse and office facility.",
      "Performed field measurement and installation of ductwork components including large double-wall insulated sections.",
      "Coordinated ductwork installation alongside active interior finish work.",
      "Applied field rigging techniques to safely position oversized duct sections within the structure.",
    ],
  },
  {
    title: "The Assembly — New Construction",
    slug: "the-assembly",
    type: "Commercial",
    role: "HVAC Field Installer",
    value: "",
    location: "Broken Arrow, OK",
    period: "~2005–2006",
    image: "",
    description: [
      "Commercial new construction HVAC installation.",
      "Identified equipment specification discrepancies during installation and escalated through appropriate channels.",
      "Maintained compliance with applicable life safety codes throughout project duration.",
    ],
  },
  {
    title: "Union Pines Surgery Center — Tulsa Bone & Joint",
    slug: "union-pines-surgery-center",
    type: "Medical",
    role: "HVAC Field Installer",
    value: "",
    location: "Tulsa, OK",
    period: "",
    image: "",
    description: [
      "8 operating room ambulatory surgical facility requiring healthcare-specific HVAC design.",
      "Installed laminar airflow configurations in surgical suites to support sterile field requirements.",
      "Supply low / return high design utilized to control contaminant movement away from the sterile field.",
      "Gained direct exposure to medical occupancy outdoor air intake requirements and associated health and safety standards.",
    ],
  },
  {
    title: "RiverSpirit Casino — Phase I",
    slug: "riverspirit-casino",
    summary: "Created 3D shop drawings for the mechanical room of RiverSpirit Casino — full piping and equipment model developed from engineer-provided 2D drawings.",
    type: "Gaming & Entertainment",
    role: "3D Mechanical Room Designer",
    value: "",
    location: "Muscogee (Creek) Nation, Tulsa, OK",
    period: "",
images: [
  {
    src: "/images/construction/riverspirit-construction.webp",
    caption: "RiverSpirit Casino Phase I under construction, December 2007. Photo: Tulsa World Archive.",
  },
  {
    src: "/images/construction/riverspirit.png",
    caption: "Add your caption here.",
  },
],
description: [
      "Approximately 300,000 sq ft gaming and entertainment facility.",
      "Converted engineer-provided 2D mechanical room drawings into a full 3D model using AutoCAD 3D and Pipe Designer 3D.",
      "Modeled large-diameter piping systems including flanged assemblies, valves, chillers, and cooling tower connections.",
      "Self-taught AutoCAD 3D by leveraging existing knowledge of SolidWorks and Pro-E — identified equivalent commands through independent research.",
      
    ],
    disclaimer: "Project files are not reproduced here out of respect for the client's proprietary systems and facility security. Available for discussion in an interview setting.",
  },
  {
    title: "Tulsa Teachers Credit Union",
    slug: "tulsa-teachers-credit-union",
    type: "Commercial",
    role: "HVAC Field Installer",
    value: "",
    location: "Tulsa, OK",
    period: "",
    image: "",
    description: [
      "Small commercial facility HVAC installation.",
      "Performed field installation in tight conditions requiring careful coordination with existing building systems.",
    ],
  },
  {
    title: "OSU Tulsa — Helmerich ATRC",
    slug: "osu-tulsa-atrc",
    type: "Research & Education",
    role: "Site Visit / Informal Consultation",
    value: "$43M",
    location: "Tulsa, OK",
    period: "",
    image: "",
    description: [
      "128,000 sq ft advanced technology research center.",
      "Specialty laboratory exhaust system utilizing strobic fan units — passive venturi exhaust operating continuously.",
      "Observed stainless steel prefabricated lab exhaust installation consistent with prior project experience.",
    ],
  },
];
