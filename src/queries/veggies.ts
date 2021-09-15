import { useQuery } from 'react-query';

export function useGetRecipes() {
  const query = useQuery('recipes', () =>
    fetch('/recipes').then(res =>
      res.json()
    )
  )
  return query
}

export function useGetMonthlyVegs() {
  const query = useQuery('monthlyVegs', () => fetch('/monthlyVegs').then(res => res.json()))
  return query;
}

/*
get banana
find banana
return when is banana
 */