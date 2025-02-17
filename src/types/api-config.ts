
export type EndpointConfig = {
  url: string;
  method: 'GET' | 'POST';
  jsonPath: string;
  isEditing: boolean;
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
