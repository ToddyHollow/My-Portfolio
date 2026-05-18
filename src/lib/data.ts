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
    role: "HVAC Field Installer",
    value: "$47M",
    location: "OSU Stillwater, OK",
    period: "Summer 2004",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Boone_Pickens_Stadium.jpg/1280px-Boone_Pickens_Stadium.jpg",
    siteUrl: "https://okstate.com/facilities/boone-pickens-stadium/1",
    description: [
      "Sheet metal installation on a major Division I athletic facility.",
      "First commercial project — developed foundational skills in print reading and field installation.",
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
    siteUrl: "https://academics.nsuok.edu/naturalsciences/default.aspx",
    description: [
      "62,000 sq ft facility with 26 laboratory spaces.",
      "Specialty stainless steel prefabricated exhaust ductwork — measurements for structural blockouts had to be dead-nutz before structure closed in, because prefab components could not be modified in the field.",
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
    image: "",
    siteUrl: "https://www.unionps.org",
    description: [
      "Commissioned and started up 52 individual York rooftop units — one per classroom pod.",
      "Managed crew and coordinated startup schedule across the entire facility.",
    ],
  },
  {
    title: "Community Food Bank of Eastern Oklahoma",
    slug: "community-food-bank",
    type: "Warehouse & Office",
    role: "HVAC Field Installer — Project Recovery",
    value: "",
    location: "Tulsa, OK",
    period: "",
    image: "",
    siteUrl: "https://www.okfoodbank.org",
    description: [
      "Came in mid-project to assess incomplete work left by a previous installer.",
      "Field-measured all missing duct components including large double-wall insulated sections — no elbows, transitions, or connectors were on site.",
      "Improvised rigging using vise-grips, chain, and pulley off existing fire suppression pipe to hoist oversized duct sections.",
      "Discovered an uncharted steel beam 10 feet off deck not shown on prints — forced duct into a non-ideal configuration causing airflow restriction.",
      "Navigated active ceiling grid installation simultaneously with ductwork.",
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
    siteUrl: "",
    description: [
      "Identified incorrect vibration isolator spec — canvas cover ordered for outdoor rooftop curb application, collecting rainwater.",
      "Refused to install egress stairwell ductwork shared with an occupied floor — life safety code violation directed by the PM.",
      "Project suffered from rotating engineers at Dewberry Engineering — RFIs sent to dead email addresses, no responses, no documented approvals.",
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
    siteUrl: "https://www.tulsaboneandjoint.com",
    description: [
      "8 operating room ambulatory surgical facility with healthcare-specific HVAC including laminar airflow configurations for sterile surgical environments.",
      "Supply low / return high design in OR suites — controls contaminant movement away from the sterile field.",
      "Cited during inspection for air intake proximity to roof surface — learned outdoor air intake setback requirements for medical occupancies due to Legionella and waterborne pathogen risk from rooftop standing water.",
    ],
  },
  {
    title: "RiverSpirit Casino — Phase I",
    slug: "riverspirit-casino",
    type: "Gaming & Entertainment",
    role: "Detail Drafter",
    value: "",
    location: "Muscogee (Creek) Nation, Tulsa, OK",
    period: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/River_Spirit_Casino_Resort.jpg/1280px-River_Spirit_Casino_Resort.jpg",
    siteUrl: "https://www.riverspirittulsa.com",
    description: [
      "~300,000 sq ft gaming floor.",
      "Drafted chiller and cooling tower piping in the mechanical room — large-diameter flanged assemblies and valve configurations.",
      "Did not work on gaming floor HVAC or distribution systems.",
    ],
  },
  {
    title: "Tulsa Teachers Credit Union",
    slug: "tulsa-teachers-credit-union",
    type: "Commercial",
    role: "HVAC Field Installer — Project Recovery",
    value: "",
    location: "Tulsa, OK",
    period: "",
    image: "",
    siteUrl: "https://www.ttcu.com",
    description: [
      "Brought in to compensate for an underperforming existing crew.",
      "Small commercial facility with tight residential-scale conditions.",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/OSU-Tulsa_Helmerich_Research_Center.jpg/1280px-OSU-Tulsa_Helmerich_Research_Center.jpg",
    siteUrl: "https://tulsa.okstate.edu/helmerich-research-center/",
    description: [
      "128,000 sq ft advanced technology research center.",
      "Specialty stainless steel lab exhaust system with strobic fan units — passive venturi exhaust with no moving parts, running 24 hours a day.",
      "Same specialty stainless prefab exhaust as NSU Science Center, earlier in career.",
    ],
  },
];