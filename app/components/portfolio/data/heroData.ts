import { User, Mail, Code, Folder, Sparkles } from "lucide-react";

import { Card, Button } from "../types/hero";

export const heroCards: Card[] = [
  {
    id: "profile",
    title: "Profile",
    bg: "bg-card-blue",
    content: [
      "Lamin Cham",
      "Frontend Developer",
      "Passionate about UX/UI and modern web technologies",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    bg: "bg-card-cyan",
    content: ["lamin-cham@hotmail.com", "+47 45 48 55 35", "Oslo, Norway"],
  },
  {
    id: "skills",
    title: "Skills",
    bg: "bg-card-purple",
    content: [
      "React & TypeScript",
      "Swift & Kotlin",
      "HTML, CSS, Tailwind",
      "Mysql, PostGress",
      "UI/UX Design (Figma)",
    ],
  },
  {
    id: "projects",
    title: "Projects",
    bg: "bg-card-indigo",
    content: [
      "Rick & Morty App (Android, Kotlin)",
      "TrumpNews Fullstack (React + .NET API)",
      "Unity Game (3D controller & combat system)",
      "Beacon app (iOS)",
    ],
  },
  {
    id: "traits",
    title: "Traits",
    bg: "bg-card-pink",
    content: ["Team player", "Flexible learner", "Patience", "Detail-oriented"],
  },
];

export const heroButtons: Button[] = [
  { id: "profile", icon: User },
  { id: "contact", icon: Mail },
  { id: "skills", icon: Code },
  { id: "projects", icon: Folder },
  { id: "traits", icon: Sparkles },
];
