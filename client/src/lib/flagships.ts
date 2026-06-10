import { ASSET_URLS } from "./assetUrls";

export interface Flagship {
  id: string;
  name: string;
  status: "COMING SOON" | "AVAILABLE NOW" | "PRIVATE BUILD" | "BETA ACCESS";
  category: string;
  description: string;
  image: string;
}

export const FLAGSHIPS: Flagship[] = [
  {
    id: "metallic-v1",
    name: "METALLIC.V1",
    status: "PRIVATE BUILD",
    category: "Elite Cognitive Builder",
    description:
      "Metallic.V1 is a private cognitive building system for creators, founders, operators, and developers. It brings automation, workflow intelligence, reusable frameworks, and scalable execution systems into one premium operating environment.",
    image: ASSET_URLS.products.metallicV1,
  },
  {
    id: "zouk",
    name: "ZOUK",
    status: "BETA ACCESS",
    category: "AI Skills, Agents & Automation Operating System",
    description:
      "ZOUK is an AI workflow operating system built around specialist agents, reusable skills, automation frameworks, backend logic, templates, and execution engines for advanced builders.",
    image: ASSET_URLS.products.zouk,
  },
  {
    id: "naughty-pilot",
    name: "NAUGHTY PILOT",
    status: "COMING SOON",
    category: "Adult Traffic Automation Platform",
    description:
      "Naughty Pilot is a focused traffic and automation platform for adult creators, agencies, and operators. It is designed around audience growth, lead acquisition, campaign management, and promotional execution.",
    image: ASSET_URLS.products.naughtyPilot,
  },
  {
    id: "uncensored-uncertain",
    name: "UNCENSORED & UNCERTAIN",
    status: "AVAILABLE NOW",
    category: "Private Companion Experience",
    description:
      "Uncensored & Uncertain is a private interactive companion experience built for unrestricted conversation, entertainment, engagement, and personalized digital interaction.",
    image: ASSET_URLS.products.uncensoredUncertain,
  },
  {
    id: "fluentbridge",
    name: "FLUENTBRIDGE",
    status: "COMING SOON",
    category: "Bilingual Learning Platform",
    description:
      "FluentBridge helps learners practice English and Spanish through interactive lessons, guided speaking practice, conversation exercises, listening drills, and progress tracking.",
    image: ASSET_URLS.products.fluentBridge,
  },
  {
    id: "founder-gear",
    name: "FOUNDER GEAR",
    status: "COMING SOON",
    category: "Metallic.V1 Founder Apparel",
    description:
      "Founder Gear includes limited Metallic.V1 apparel and supporter rewards tied to early contribution milestones, including the founder T-shirt concept and future collector drops.",
    image: ASSET_URLS.products.founderGear,
  },
];
