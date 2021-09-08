import { MONTHS } from './monthlyVegs'
import { RECIPES } from './recipes';

export const mergeAllVegs = () => {
  const FRUITS = [...new Set(MONTHS.data.map((e: any, i: number) => e.fruits).flat())]
  const VEGETABLES = [...new Set(MONTHS.data.map((e: any, i: number) => e.vegetables).flat())]
  return [...FRUITS, ...VEGETABLES]
}

export const filterAllergens = (selectedAllergens: string[]) => {
  return RECIPES.map(recipesPerIngredient =>
    recipesPerIngredient.recipes.map((recipe: any) => {
      if (selectedAllergens.some((selectedAllergene: string) => recipe.allergens.includes(selectedAllergene))) { return null } else return recipe
    })
  ).flat()
}