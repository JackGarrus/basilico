import { useQuery } from 'react-query';
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

export function useFilteredRecipesByAllergene(allergenes: any) {
  const query = stringify(
    { allergenes: allergenes },
    { arrayFormat: 'repeat', indices: true },
  );
  return useQuery<any>(['recipes', allergenes], () =>
    fetch(`/recipes?${query}`).then(res => {
      //queryClient.invalidateQueries('recipes')
      return res.json();
    }),
  );
}
