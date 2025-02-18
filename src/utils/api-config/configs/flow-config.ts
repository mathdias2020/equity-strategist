
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
    dolar: { 
      url: 'flow', 
      method: 'GET', 
      jsonPath: 'price.mini.dolar',
      displayLocation: 'price-mini-dolar',
      isEditing: false 
    }, 
    indice: { 
      url: 'flow', 
      method: 'GET', 
      jsonPath: 'price.mini.indice',
      displayLocation: 'price-mini-indice',
      isEditing: false 
    } 
  },
  priceFull: { 
    dolar: { 
      url: 'flow', 
      method: 'GET', 
      jsonPath: 'price.full.dolar',
      displayLocation: 'price-full-dolar',
      isEditing: false 
    }, 
    indice: { 
      url: 'flow', 
      method: 'GET', 
      jsonPath: 'price.full.indice',
      displayLocation: 'price-full-indice',
      isEditing: false 
    } 
  },
  priceGeneral: { 
    dolar: { 
      url: 'flow', 
      method: 'GET', 
      jsonPath: 'price.general.dolar',
      displayLocation: 'price-general-dolar',
      isEditing: false 
    }, 
    indice: { 
      url: 'flow', 
      method: 'GET', 
      jsonPath: 'price.general.indice',
      displayLocation: 'price-general-indice',
      isEditing: false 
    } 
  }
};
