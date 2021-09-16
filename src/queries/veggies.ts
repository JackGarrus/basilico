import { useQuery } from 'react-query';

export function useGetMonthlyVegs() {
  return useQuery('monthlyVegs', () => fetch('/monthlyVegs').then(res => res.json()))
}

export function useGetRecipes() {
  return useQuery('recipes', () => fetch('/recipes').then(res => res.json()))
}