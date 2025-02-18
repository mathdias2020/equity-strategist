
import { APIConfig } from "@/types/api-config";

export const usaMarketsConfig: APIConfig = {
  usa_sp500: { 
    dolar: { url: '', method: 'GET', jsonPath: '', isEditing: false }, 
    indice: { url: '', method: 'GET', jsonPath: '', isEditing: false } 
  },
  usa_nasdaq: { 
    dolar: { url: '', method: 'GET', jsonPath: '', isEditing: false }, 
    indice: { url: '', method: 'GET', jsonPath: '', isEditing: false } 
  },
  usa_dowjones: { 
    dolar: { url: '', method: 'GET', jsonPath: '', isEditing: false }, 
    indice: { url: '', method: 'GET', jsonPath: '', isEditing: false } 
  },
  usa_vix: { 
    dolar: { url: '', method: 'GET', jsonPath: '', isEditing: false }, 
    indice: { url: '', method: 'GET', jsonPath: '', isEditing: false } 
  },
};
