import { Pharmacy } from "@/types/pharmacy";

export type Event = {
  id: string;
  summary: string;
  location: string;
  start: { date?: string };
  end: { date?: string };
  pharmacy?: Pharmacy;
};
