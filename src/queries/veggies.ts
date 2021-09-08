import { useQuery } from 'react-query';
import { MONTHS } from 'data/monthlyVegs';

export function useGetMonthlyVegsList() {
  const query = useQuery(
    'monthlyVegsList', () => MONTHS,
    {
      staleTime: 300_000,
    },
  );

  useQuery('recipes', () =>
    fetch('/recipes').then(res =>
      res.json()
    )
  )
  return query
}