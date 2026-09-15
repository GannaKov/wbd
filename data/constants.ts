export const PROJECTS = [
  "Honigdachs",
  "Sternschnuppe",
  "Blauwal",
  "Nordlicht",
  "Kaktus",
  "Wildfeuer",
  "Eisbärchen",
  "Faultier",
] as const;

export type Project = (typeof PROJECTS)[number];

export const LANGUAGES = [
  "Deutsch",
  "Englisch",
  "Ukrainisch",
  "Russisch",
  "Arabisch",
  "Spanisch",
] as const;

export type Language = (typeof LANGUAGES)[number];
