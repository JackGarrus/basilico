import { useQuery } from 'react-query';
import * as qs from '@billjs/query-string';

// usa la cache per questa chiamata, che ogni volta che tocchi il carousel parte la chiamata _-_
export function useGetMonthlyVegs() {
  return useQuery('monthlyVegs', () => fetch('/monthlyVegs').then(res => res.json()))
}

export function useGetRecipes() {
  return useQuery('recipes', () => fetch('/recipes').then(res => res.json()))
}

export function useFilteredRecipesByAllergene(allergens: any) {
  const query = qs.stringify({ allergens });
  return useQuery<any>(['recipes', allergens],
    () => fetch(`/recipes?${query}`).then(res => res.json())
  )
}