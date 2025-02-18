
import { useState } from "react";
import { APIConfig, ActiveFilter } from "@/types/api-config";

export const useMarketConfig = (
  initialConfig: APIConfig,
  activeFilter: ActiveFilter,
  onSave: (config: APIConfig) => void
) => {
  const [localConfig, setLocalConfig] = useState<APIConfig>(initialConfig);

  return {
    localConfig,
    handleSubmit: (e: React.FormEvent) => {
      e.preventDefault();
      onSave(localConfig);
    }
  };
};

