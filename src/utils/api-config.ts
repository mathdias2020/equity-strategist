
import { APIConfig, MarketTable } from "@/types/api-config";

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
    indices: { dolar: '', indice: '' },
    currencies: { dolar: '', indice: '' },
    commodities: { dolar: '', indice: '' },
  },
  ai: {
    suggestions: { dolar: '', indice: '' },
    analysis: { dolar: '', indice: '' },
  },
};

export const defaultMarketTables: MarketTable[] = [
  {
    id: "eua",
    name: "EUA",
    endpoints: [
      { name: "S&P 500", endpoint: { dolar: '', indice: '' } },
      { name: "NASDAQ", endpoint: { dolar: '', indice: '' } },
      { name: "DOW JONES", endpoint: { dolar: '', indice: '' } },
      { name: "VIX", endpoint: { dolar: '', indice: '' } },
    ],
  },
  {
    id: "brasil",
    name: "BRASIL",
    endpoints: [
      { name: "USD/BRL", endpoint: { dolar: '', indice: '' } },
      { name: "INDFUT", endpoint: { dolar: '', indice: '' } },
      { name: "BRL10Y", endpoint: { dolar: '', indice: '' } },
    ],
  },
  {
    id: "europa",
    name: "EUROPA",
    endpoints: [
      { name: "STOXX 600", endpoint: { dolar: '', indice: '' } },
      { name: "DAX", endpoint: { dolar: '', indice: '' } },
      { name: "FTSE 100", endpoint: { dolar: '', indice: '' } },
    ],
  },
  {
    id: "commodities",
    name: "COMMODITIES",
    endpoints: [
      { name: "WTI OIL", endpoint: { dolar: '', indice: '' } },
      { name: "GOLD", endpoint: { dolar: '', indice: '' } },
      { name: "COPPER", endpoint: { dolar: '', indice: '' } },
    ],
  },
];

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
  markets: {
    indices: "Índices",
    currencies: "Moedas",
    commodities: "Commodities",
  },
  ai: {
    suggestions: "Sugestões",
    analysis: "Análise de Mercado",
  },
};

