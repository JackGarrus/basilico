import { useMutation, useQuery } from 'react-query';
import { stringify } from 'qs';
import { queryClient } from 'state/cache';

export function useGetMonthlyVegs() {
  return useQuery(
    'monthlyVegs',
    () => fetch('/monthlyVegs').then(res => res.json()),
    {
      staleTime: Infinity,
    },
  );
}

export function useGetRecipes() {
  return useQuery('recipes', () => fetch('/recipes').then(res => res.json()));
}

export function useFilteredRecipesByAllergene(allergens: string[]) {
  const query = stringify(
    { allergens: allergens },
    { arrayFormat: 'repeat', indices: true },
  );
  return useMutation<any>(['recipes', allergens], () =>
    fetch(`/recipes?${query}`).then(res => {
      return res.json();
    }),
  );
}
