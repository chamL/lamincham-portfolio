import { LucideIcon } from "lucide-react";

export type Card = {
  id: string;
  title: string;
  bg: string;
  content: string[];
};

export type Button = {
  id: string;
  icon: LucideIcon;
};

export type HeroLeftProps = {
  cards: Card[];
  buttons: Button[];
  activeCard: string;
  setActiveCard: (id: string) => void;
};

export type HeroCardsProps = {
  cards: Card[];
  activeCard: string;
};

export type HeroButtonsProps = {
  buttons: Button[];
  activeCard: string;
  setActiveCard: (id: string) => void;
};
export type HeroRightProps = {
  movePicture: boolean;
  setMovePicture: (value: boolean) => void;
};
