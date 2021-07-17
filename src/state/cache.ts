import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 300_000,
    },
  },
});
