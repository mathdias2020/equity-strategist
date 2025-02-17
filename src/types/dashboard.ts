
export type FilterType = 'dolar' | 'indice';

export interface FlowData {
  player: string;
  position: string;
  minutes30: string;
}

export interface PriceData {
  mini: { buy: number; sell: number };
  full: { buy: number; sell: number };
  general: { buy: number; sell: number };
  distance: number;
}
