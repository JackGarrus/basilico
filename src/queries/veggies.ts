import { useQuery } from 'react-query';
import { stringify } from 'qs'
import { queryClient } from 'state/cache';

// usa la cache per questa chiamata, che ogni volta che tocchi il carousel parte la chiamata _-_
export function useGetMonthlyVegs() {
  return useQuery('monthlyVegs', () => fetch('/monthlyVegs').then(res => res.json()))
}

export function useGetRecipes() {
  return useQuery('recipes', () => fetch('/recipes').then(res => res.json()))
}

export function useFilteredRecipesByAllergene(allergenes: any) {
  const query = stringify({ allergenes }, { arrayFormat: 'comma', encode: true, indices: false })

  return useQuery<any>(['recipes', allergenes],
    () => fetch(`/recipes?${query}`).then(res => res.json())
  )
}
