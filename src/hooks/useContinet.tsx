import { createContext, ReactNode, useContext } from "react";
import { continentDb } from "../utils/continentDb";

export interface CitiesMore100 {
  name: string;
  country: string;
  flag: string;
  image: string;
}

interface Continent {
  slug: string;
  title: string;
  description: string;
  continentBaner: string;
  countries: number;
  languages: number;
  cities: number;
  cities_list: string;
  citiesMore100: CitiesMore100[];
}

interface ContinentProviderProps {
  children: ReactNode;
}

interface ContinentContextData {
  continent: Continent;
}

const ContinentContext = createContext<ContinentContextData>(
  {} as ContinentContextData
);

export function ContinentProvider({ children }: ContinentProviderProps) {
 
  const continent = continentDb;

  return (
    <ContinentContext.Provider value={{ continent }}>
      {children}
    </ContinentContext.Provider>
  )
}

export function useContinent() {
  const context = useContext(ContinentContext);

  return context;
}