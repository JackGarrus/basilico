import { MONTHS } from './monthlyVegs'
import { RECIPES } from './recipes';

export const mergeAllVegs = () => {
  const FRUITS = [...new Set(MONTHS.data.map((e: any, i: number) => e.fruits).flat())]
  const VEGETABLES = [...new Set(MONTHS.data.map((e: any, i: number) => e.vegetables).flat())]
  return [...FRUITS, ...VEGETABLES]
}

export const filterAllergens = () => {
  RECIPES.map(recipesPerIngredient =>
    recipesPerIngredient.recipes.map((recipe: any) => {
      if (recipe.allergens.length === 0) return recipe
      if (!recipe.allergens.includes('eggs')) return recipe
    })
  ).flat()
}