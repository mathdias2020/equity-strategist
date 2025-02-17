
export type APIConfig = {
  [key: string]: {
    dolar: string;
    indice: string;
  };
};

export type ActiveFilter = 'dolar' | 'indice';

export type ConfigSectionFields = { [key: string]: string };

export interface MarketEndpoint {
  name: string;
  endpoint: {
    dolar: string;
    indice: string;
  };
}

export interface MarketTable {
  id: string;
  name: string;
  endpoints: MarketEndpoint[];
}

export interface ConfigSectionProps {
  title: string;
  config: APIConfig;
  activeFilter: ActiveFilter;
  fields: ConfigSectionFields;
  onSave: (config: APIConfig) => void;
}

export interface MarketConfigSectionProps {
  title: string;
  tables: MarketTable[];
  activeFilter: ActiveFilter;
  onSave: (tables: MarketTable[]) => void;
}

