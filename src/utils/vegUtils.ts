import { Fruits, VegType } from 'types/types';
import { MONTHLY_VEGS } from '../data/monthlyVegs'
import { RECIPES } from '../data/recipes';

export const mergeAllVegs = () => [...getAllFruits(), ...getAllVegs()]

export const filterAllergens = (selectedAllergens: string[]) => {
  return RECIPES.map(recipesPerIngredient =>
    recipesPerIngredient.recipes.map((recipe: any) => {
      if (selectedAllergens.some((selectedAllergene: string) => recipe.allergens.includes(selectedAllergene))) { return null } else return recipe
    })
  ).flat()
}

export const getAllFruits = () => [...new Set(MONTHLY_VEGS.data.map((e: any, i: number) => e.fruits).flat())];
export const getAllVegs = () => [...new Set(MONTHLY_VEGS.data.map((e: any, i: number) => e.vegetables).flat())];

export const isFruit = (veg: VegType): veg is Fruits => getAllFruits().includes(veg) ?? false;
