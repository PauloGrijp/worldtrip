import { createContext, ReactNode, useContext } from "react";

interface Continent {
  slug: string;
  title: string;
  description: string;
  continentBaner: string;
  countries: number;
  languages: number;
  cities: number;
  cities_list: string;
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
 
  const continent = {
    slug: '1',
    title: 'Europa',
    description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    continentBaner: '/continentBanner.png',
    countries: 50,
    languages: 60,
    cities: 27,
    cities_list: 'Paris, Londres, Lisboa, Madrid, etc...',
  }

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