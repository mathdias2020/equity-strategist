
import { APIConfig } from "@/types/api-config";
import { usaMarketsConfig } from "./markets/usa-markets";
import { brazilMarketsConfig } from "./markets/brazil-markets";
import { europeanMarketsConfig } from "./markets/european-markets";
import { commoditiesConfig } from "./markets/commodities";
import { currencyMarketsConfig } from "./markets/currency-markets";
import { emergingMarketsConfig } from "./markets/emerging-markets";
import { usTreasuriesConfig } from "./markets/us-treasuries";

export const marketsConfig: APIConfig = {
  ...usaMarketsConfig,
  ...brazilMarketsConfig,
  ...europeanMarketsConfig,
  ...commoditiesConfig,
  ...currencyMarketsConfig,
  ...emergingMarketsConfig,
  ...usTreasuriesConfig,
};
