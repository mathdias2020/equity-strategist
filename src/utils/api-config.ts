
import { APIConfig } from "@/types/api-config";

export const defaultConfigs = {
  dashboard: {
    flowInstitutionalPosition: { dolar: '', indice: '' },
    flowInstitutional30Min: { dolar: '', indice: '' },
    flowRetailPosition: { dolar: '', indice: '' },
    flowRetail30Min: { dolar: '', indice: '' },
    priceMini: { dolar: '', indice: '' },
    priceFull: { dolar: '', indice: '' },
    priceGeneral: { dolar: '', indice: '' },
  },
  flow: {
    institutionalPosition: { dolar: '', indice: '' },
    institutional30Min: { dolar: '', indice: '' },
    retailPosition: { dolar: '', indice: '' },
    retail30Min: { dolar: '', indice: '' },
    priceMini: { dolar: '', indice: '' },
    priceFull: { dolar: '', indice: '' },
    priceGeneral: { dolar: '', indice: '' },
  },
  markets: {
    usa_sp500: { dolar: '', indice: '' },
    usa_nasdaq: { dolar: '', indice: '' },
    usa_dowjones: { dolar: '', indice: '' },
    usa_vix: { dolar: '', indice: '' },
    br_usdbrl: { dolar: '', indice: '' },
    br_indfut: { dolar: '', indice: '' },
    br_brl10y: { dolar: '', indice: '' },
    eu_stoxx600: { dolar: '', indice: '' },
    eu_dax: { dolar: '', indice: '' },
    eu_ftse100: { dolar: '', indice: '' },
    com_wti: { dolar: '', indice: '' },
    com_gold: { dolar: '', indice: '' },
    com_copper: { dolar: '', indice: '' },
  },
  ai: {
    suggestions: { dolar: '', indice: '' },
    analysis: { dolar: '', indice: '' },
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
    suggestions: "Sugestões",
    analysis: "Análise de Mercado",
  },
};

