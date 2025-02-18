
import { useState, useCallback } from 'react';

export const useEndpointData = (displayLocation: string, autoFetch: boolean = true) => {
  const [data, setData] = useState<any>(null);
  const [lastCallTime, setLastCallTime] = useState<Date | null>(() => {
    const savedTime = localStorage.getItem('lastApiCallTime');
    return savedTime ? new Date(savedTime) : null;
  });

  const fetchData = useCallback(() => {
    console.log(`Mock data fetch for ${displayLocation}`);
    setData(null);
    const newTime = new Date();
    localStorage.setItem('lastApiCallTime', newTime.toISOString());
    setLastCallTime(newTime);
  }, [displayLocation]);

  return { data, fetchData, lastCallTime };
};

