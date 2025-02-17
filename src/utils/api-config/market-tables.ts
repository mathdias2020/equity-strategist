
interface MarketAsset {
  name: string;
  key: string;
}

interface MarketTable {
  name: string;
  assets: MarketAsset[];
}

export const marketTables: Record<string, MarketTable> = {
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

