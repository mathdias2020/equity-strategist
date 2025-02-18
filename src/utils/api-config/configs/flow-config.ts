
import { APIConfig } from "@/types/api-config";

export const flowConfig: APIConfig = {
  institutionalPosition: { 
    dolar: { 
      url: 'flow', 
      method: 'GET', 
      jsonPath: 'position.daily.foreignDolar',
      displayLocation: 'institutional-position',
      isEditing: false 
    }, 
    indice: { 
      url: 'flow', 
      method: 'GET', 
      jsonPath: 'position.daily.foreignIndice',
      displayLocation: 'institutional-indice',
      isEditing: false 
    } 
  },
  retailPosition: { 
    dolar: { 
      url: 'flow', 
      method: 'GET', 
      jsonPath: 'position.daily.localDolar',
      displayLocation: 'retail-position',
      isEditing: false 
    }, 
    indice: { 
      url: 'flow', 
      method: 'GET', 
      jsonPath: 'position.daily.localIndice',
      displayLocation: 'retail-indice',
      isEditing: false 
    } 
  },
  priceMini: { 
    dolar: { url: '', method: 'GET', jsonPath: '', isEditing: false }, 
    indice: { url: '', method: 'GET', jsonPath: '', isEditing: false } 
  },
  priceFull: { 
    dolar: { url: '', method: 'GET', jsonPath: '', isEditing: false }, 
    indice: { url: '', method: 'GET', jsonPath: '', isEditing: false } 
  },
  priceGeneral: { 
    dolar: { url: '', method: 'GET', jsonPath: '', isEditing: false }, 
    indice: { url: '', method: 'GET', jsonPath: '', isEditing: false } 
  }
};
