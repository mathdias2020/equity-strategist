
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { EndpointConfig } from '@/types/api-config';

export const useEndpointTesting = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const testEndpoint = async (endpoint: EndpointConfig) => {
    toast({
      title: "API Desabilitada",
      description: "As chamadas de API foram desabilitadas.",
      variant: "destructive",
    });
    return null;
  };

  return {
    testEndpoint,
    isLoading
  };
};
