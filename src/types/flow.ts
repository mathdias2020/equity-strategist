
export type FilterType = 'dolar' | 'indice';
export type ChartType = 'line' | 'bar';
export type PositionFilter = 'institutional' | 'retail' | 'both';

export interface ChartData {
  time: string;
  institutional: number;
  retail: number;
}
