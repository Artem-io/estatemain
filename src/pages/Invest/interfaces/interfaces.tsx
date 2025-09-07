export interface Investment {
  id: number;
  title: string;
  description: string;
  location: string;
  type: string;
  price: number;
  currency: string;
  profitMin: number;
  profitMax: number;
  timeMin: number;
  timeMax: number;
  risk: string;
}