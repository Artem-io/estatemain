export interface Property {
  id: number;
  title: string;
  description: string;
  location: string;
  type: string;
  priceEUR: number;
  priceUSD: number;
  priceGBP: number;
  profitMin: number;
  profitMax: number;
  timeMin: number;
  timeMax: number;
  risk: string;
  fullDescription: string;
  imageUrls: [];
  videoUrls: string[];
}

export interface ParametrsProps {
  setIsOpen: (state: boolean) => void;
  location: string;
  type: string;
  priceEUR: number;
  priceUSD: number;
  priceGBP: number;
  profitMin: number;
  profitMax: number;
  timeMin: number;
  timeMax: number;
  risk: string;
}

export interface DescriptionProps {
  setIsOpen: (state: boolean) => void;
  fullDescription: string;
}

export interface SliderProps {
  imageUrls: [];
  videoUrls: string[];
}