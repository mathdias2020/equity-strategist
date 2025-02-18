
import { useState } from 'react';

export const useEndpointData = (displayLocation: string, autoFetch: boolean = true) => {
  const [data, setData] = useState<any>(null);
  const [lastCallTime, setLastCallTime] = useState<Date | null>(() => {
    const savedTime = localStorage.getItem('lastApiCallTime');
    return savedTime ? new Date(savedTime) : null;
  });

  const fetchData = () => {
    console.log(`Mock data fetch disabled for ${displayLocation}`);
    setData(null);
  };

  return { data, fetchData, lastCallTime };
};
