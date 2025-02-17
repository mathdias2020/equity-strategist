
export type APIConfig = {
  [key: string]: {
    dolar: string;
    indice: string;
  };
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

