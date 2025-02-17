import { APIConfig } from "@/types/api-config";

export const defaultConfigs = {
  dashboard: {
    flowInstitutionalPosition: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    flowInstitutional30Min: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    flowRetailPosition: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    flowRetail30Min: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    priceMini: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    priceFull: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    priceGeneral: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
  },
  flow: {
    institutionalPosition: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    institutional30Min: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    retailPosition: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    retail30Min: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    priceMini: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    priceFull: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    priceGeneral: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
  },
  markets: {
    usa_sp500: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    usa_nasdaq: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    usa_dowjones: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    usa_vix: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    br_usdbrl: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    br_indfut: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    br_brl10y: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    eu_stoxx600: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    eu_dax: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    eu_ftse100: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    com_wti: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    com_gold: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    com_copper: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    dx_index: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    dx_usdeur: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    dx_usdjpy: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    dx_usdgbp: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    dx_usdcad: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    dx_usdsek: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    dx_usdchf: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    em_usdbrl: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    em_usdmxn: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    em_usdzar: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    em_usdcny: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    em_usdtry: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    em_usdinr: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    em_usdrub: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    em_usdhuf: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    em_usdpln: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    em_usdczk: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    em_usdidr: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    br_dif27: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    br_dif29: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    br_dif31: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    br_dif33: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    br_dif35: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    us_2y: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    us_10y: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    us_30y: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
  },
  ai: {
    operationType: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    operationAsset: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    operationTime: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    operationPrice: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    operationTarget: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    operationResult: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
    analysis: { 
      dolar: { url: '', method: 'GET', isEditing: false }, 
      indice: { url: '', method: 'GET', isEditing: false } 
    },
  },
};
