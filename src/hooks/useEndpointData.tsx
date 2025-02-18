
import { useState } from "react";

export const useEndpointData = () => {
  const [data] = useState<any>(null);
  return { data };
};

