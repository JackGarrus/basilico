export interface IngredientRecipe {
  id: number;
  ingredientName: string;
  recipes: Recipe[];
}
export interface Recipe {
  id: number;
  name: string;
  image: string;
  time: string;
  link: string;
  difficulty: string;
  isSweet: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  hasMeat: boolean;
  hasFish: boolean;
  allergens: Allergens[] | null;
  ingredients: RecipeIngredients[];
  instructions: string[];
  advices?: string[] | string;
}

export type Allergens =
  | 'lactose'
  | 'seeds'
  | 'soy'
  | 'gluten'
  | 'nuts'
  | 'eggs';

export interface RecipeIngredients {
  name: string;
  quantity: string;
}
