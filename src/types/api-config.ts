
export type EndpointConfig = {
  url: string;
  method: 'GET' | 'POST';
  jsonPath: string;
  isEditing: boolean;
  displayLocation?: string; // Campo para armazenar o local de exibição
};

export type FilterConfig = {
  dolar: EndpointConfig;
  indice: EndpointConfig;
};

export type APIConfig = {
  [key: string]: FilterConfig;
};

export type ActiveFilter = 'dolar' | 'indice';

export type ConfigSectionFields = { [key: string]: string };

export interface ConfigSectionProps {
  title: string;
  config: APIConfig;
  activeFilter: ActiveFilter;
  fields: ConfigSectionFields;
  onSave: (config: APIConfig) => void;
}

export type MarketEndpoint = {
  key: string;
  name: string;
};

export type MarketTableConfig = {
  name: string;
  assets: MarketEndpoint[];
};

export type AIOperation = {
  tipo: "Compra" | "Venda";
  ativo: string;
  modelo: string;
  horario: string;
  preco: number;
  alvo: number;
  resultado: string;
};

// Mapeamento dos locais de exibição por seção
export const displayLocations = {
  dashboard: [
    { value: 'institutional-position', label: 'Fluxo Institucional - Posição' },
    { value: 'institutional-30min', label: 'Fluxo Institucional - 30 minutos' },
    { value: 'retail-position', label: 'Fluxo Varejo - Posição' },
    { value: 'retail-30min', label: 'Fluxo Varejo - 30 minutos' },
    { value: 'price-mini', label: 'Preço Médio - Mini' },
    { value: 'price-full', label: 'Preço Médio - Cheio' },
    { value: 'price-general', label: 'Preço Médio - Geral' }
  ],
  flow: [
    { value: 'institutional-position', label: 'Fluxo Institucional - Posição' },
    { value: 'institutional-30min', label: 'Fluxo Institucional - 30 minutos' },
    { value: 'retail-position', label: 'Fluxo Varejo - Posição' },
    { value: 'retail-30min', label: 'Fluxo Varejo - 30 minutos' },
    { value: 'price-mini', label: 'Preço Médio - Mini' },
    { value: 'price-full', label: 'Preço Médio - Cheio' },
    { value: 'price-general', label: 'Preço Médio - Geral' }
  ],
  markets: [
    { value: 'usa-sp500', label: 'S&P 500' },
    { value: 'usa-nasdaq', label: 'Nasdaq' },
    { value: 'usa-dowjones', label: 'Dow Jones' },
    { value: 'usa-vix', label: 'VIX' },
    // ... outros mercados
  ],
  ai: [
    { value: 'operation-type', label: 'Tipo de Operação' },
    { value: 'operation-asset', label: 'Ativo' },
    { value: 'operation-time', label: 'Horário' },
    { value: 'operation-price', label: 'Preço' },
    { value: 'operation-target', label: 'Alvo' },
    { value: 'operation-result', label: 'Resultado' },
    { value: 'analysis', label: 'Análise de Mercado' }
  ]
};

