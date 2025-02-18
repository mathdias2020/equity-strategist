
import { useState } from 'react';

export const useEndpointTesting = () => {
  const [isLoading, setIsLoading] = useState(false);

  return {
    isLoading
  };
};

