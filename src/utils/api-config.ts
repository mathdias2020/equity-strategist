
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
    indices: { dolar: '', indice: '' },
    currencies: { dolar: '', indice: '' },
    commodities: { dolar: '', indice: '' },
  },
  ai: {
    suggestions: { dolar: '', indice: '' },
    analysis: { dolar: '', indice: '' },
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
