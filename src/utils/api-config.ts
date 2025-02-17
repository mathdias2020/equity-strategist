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

export const marketTables = {
  usa: {
    name: "EUA",
    assets: [
      { name: "S&P 500", key: "usa_sp500" },
      { name: "NASDAQ", key: "usa_nasdaq" },
      { name: "DOW JONES", key: "usa_dowjones" },
      { name: "VIX", key: "usa_vix" },
    ],
  },
  brazil: {
    name: "Brasil",
    assets: [
      { name: "USD/BRL", key: "br_usdbrl" },
      { name: "INDFUT", key: "br_indfut" },
      { name: "BRL10Y", key: "br_brl10y" },
    ],
  },
  europe: {
    name: "Europa",
    assets: [
      { name: "STOXX 600", key: "eu_stoxx600" },
      { name: "DAX", key: "eu_dax" },
      { name: "FTSE 100", key: "eu_ftse100" },
    ],
  },
  commodities: {
    name: "Commodities",
    assets: [
      { name: "WTI OIL", key: "com_wti" },
      { name: "GOLD", key: "com_gold" },
      { name: "COPPER", key: "com_copper" },
    ],
  },
  dx: {
    name: "DX",
    assets: [
      { name: "DX", key: "dx_index" },
      { name: "USD/EUR", key: "dx_usdeur" },
      { name: "USD/JPY", key: "dx_usdjpy" },
      { name: "USD/GBP", key: "dx_usdgbp" },
      { name: "USD/CAD", key: "dx_usdcad" },
      { name: "USD/SEK", key: "dx_usdsek" },
      { name: "USD/CHF", key: "dx_usdchf" },
    ],
  },
  emergentes: {
    name: "Emergentes",
    assets: [
      { name: "USD/BRL", key: "em_usdbrl" },
      { name: "USD/MXN", key: "em_usdmxn" },
      { name: "USD/ZAR", key: "em_usdzar" },
      { name: "USD/CNY", key: "em_usdcny" },
      { name: "USD/TRY", key: "em_usdtry" },
      { name: "USD/INR", key: "em_usdinr" },
      { name: "USD/RUB", key: "em_usdrub" },
      { name: "USD/HUF", key: "em_usdhuf" },
      { name: "USD/PLN", key: "em_usdpln" },
      { name: "USD/CZK", key: "em_usdczk" },
      { name: "USD/IDR", key: "em_usdidr" },
    ],
  },
  jurosbr: {
    name: "Juros BR",
    assets: [
      { name: "DIF27", key: "br_dif27" },
      { name: "DIF29", key: "br_dif29" },
      { name: "DIF31", key: "br_dif31" },
      { name: "DIF33", key: "br_dif33" },
      { name: "DIF35", key: "br_dif35" },
    ],
  },
  juroseua: {
    name: "Juros EUA",
    assets: [
      { name: "US2Y", key: "us_2y" },
      { name: "US10Y", key: "us_10y" },
      { name: "US30Y", key: "us_30y" },
    ],
  },
};

export const sectionFields = {
  dashboard: {
    flowInstitutionalPosition: "Fluxo Institucional - Posição",
    flowInstitutional30Min: "Fluxo Institucional - 30 minutos",
    flowRetailPosition: "Fluxo Varejo - Posição",
    flowRetail30Min: "Fluxo Varejo - 30 minutos",
    priceMini: "Preço Médio - Mini",
    priceFull: "Preço Médio - Cheio",
    priceGeneral: "Preço Médio - Geral",
  },
  flow: {
    institutionalPosition: "Fluxo Institucional - Posição",
    institutional30Min: "Fluxo Institucional - 30 minutos",
    retailPosition: "Fluxo Varejo - Posição",
    retail30Min: "Fluxo Varejo - 30 minutos",
    priceMini: "Preço Médio - Mini",
    priceFull: "Preço Médio - Cheio",
    priceGeneral: "Preço Médio - Geral",
  },
  markets: marketTables,
  ai: {
    operationType: "Tipo de Operação",
    operationAsset: "Ativo",
    operationTime: "Horário",
    operationPrice: "Preço",
    operationTarget: "Alvo",
    operationResult: "Resultado",
    analysis: "Análise de Mercado",
  },
};
