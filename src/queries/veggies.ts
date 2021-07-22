import { useQuery } from 'react-query';
import { queryClient } from 'state/cache';
import { getMonthlyVegsList } from 'api/mocks/routes/month';

export function useGetMonthlyVegsList() {
     return useQuery(
          ['monthlyVegsList'],
          () => getMonthlyVegsList,
          {
               keepPreviousData: true,
               refetchOnMount: true,
          },
     );
}