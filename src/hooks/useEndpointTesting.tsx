
export const useEndpointTesting = () => {
  const testEndpoint = () => {
    console.log('Testing endpoint...');
  };

  return {
    isLoading: false,
    testEndpoint
  };
};

