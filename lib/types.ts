import type { Language, Project } from "@/data/constants";

export interface Employee {
  id: string;
  vorname: string;
  nachname: string;
  initialen: string;
  foto: string;
  projekte: Project[];
  sprachen: Language[];
}
