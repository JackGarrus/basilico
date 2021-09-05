import { MONTHS } from './monthlyVegs'
import { RECIPES } from './recipes';

export const mergeAllVegs = () => {
  const FRUITS = [...new Set(MONTHS.data.map((e: any, i: number) => e.fruits).flat())]
  const VEGETABLES = [...new Set(MONTHS.data.map((e: any, i: number) => e.vegetables).flat())]
  return [...FRUITS, ...VEGETABLES]
}

export const mergeAllAllergens = () => [...new Set(RECIPES.map((e) => e.recipes).map((j) => console.log(j)))]