import { Allergens } from 'types/recipe';
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
      if (recipe.allergens.length === 0) return recipe // ritorna tutte le ricette che non hanno allergeni
      //if (!recipe.allergens.includes('eggs')) return recipe
      if (selectedAllergens.filter(selectedAllergene => {
        return recipe.allergens.includes(selectedAllergene)
      })) return recipe

    })
  ).flat()
}
//const test3 = selectedAllergens.some(selectedAllergen => !recipeAllergens.includes(selectedAllergen))