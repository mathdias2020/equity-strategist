
import { useState } from 'react';

export const useEndpointData = () => {
  const [data, setData] = useState<any>(null);

  return { data };
};

