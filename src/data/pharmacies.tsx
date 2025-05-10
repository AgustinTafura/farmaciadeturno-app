import { Pharmacy } from "@/types/pharmacy";

export const pharmaciesByName: Record<string, Pharmacy> = {
  argentina: {
    name: "Argentina",
    address: "Hipólito Yrigoyen 444, Las Flores (cp 7200).",
    instagram: "fargentina.lf",
    tel: "2244-442246",
    whatsapp: "2244-420222",
    icon: "/icons/argentina.png",
    logo: "/logos/argentina.png",
  },
  "san martin": {
    name: "San Martin",
    address: "Av San Martin 567, Las Flores (cp 7200).",
    instagram: "farmacia_sanmartin",
    tel: "2244-452223",
    whatsapp: "",
    icon: "/icons/sanmartin.png",
    logo: "/logos/sanmartin.png",
  },
};
