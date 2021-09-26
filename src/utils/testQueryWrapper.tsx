import { QueryClientProvider } from 'react-query';
import { queryClient } from 'state/cache';

export const testQueryClient = queryClient;

/**
 * Utility wrapper to be used to test those components which internally are using react query
 */
const TestQueryWrapper: React.FC = ({ children }) => (
  <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
);

export default TestQueryWrapper;
