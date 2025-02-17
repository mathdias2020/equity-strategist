
export type APIConfig = {
  [key: string]: {
    dolar: {
      url: string;
      method: 'GET' | 'POST';
      isEditing?: boolean;
    };
    indice: {
      url: string;
      method: 'GET' | 'POST';
      isEditing?: boolean;
    };
  };
};

export type BaseUrlConfig = {
  baseUrl: string;
};

export type MarketEndpoint = {
  name: string;
  endpoint: {
    dolar: {
      url: string;
      method: 'GET' | 'POST';
    };
    indice: {
      url: string;
      method: 'GET' | 'POST';
    };
  };
};

export type MarketTableConfig = {
  name: string;
  assets: MarketEndpoint[];
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

export interface AIOperation {
  tipo: string;
  ativo: string;
  modelo: 'Fluxo' | 'AI';
  horario: string;
  preco: number;
  alvo: number;
  resultado: string;
}

