import { Fruits } from './fruits';
import { Vegetables } from './vegetables';

export type AllergensList = Allergens[] | [];
export type Allergens =
  | 'lactose'
  | 'seeds'
  | 'soy'
  | 'gluten'
  | 'nuts'
  | 'eggs';
export interface RecipesPerIngredient {
  id: number;
  ingredientName: Fruits | Vegetables;
  recipes: Recipe[]
}

export interface Recipe {
  id: number;
  name: string;
  image: string;
  link: string;
  isVegan?: boolean;
  isVegetarian?: boolean;
  isSweet?: boolean;
  hasMeat?: boolean;
  hasFish?: boolean;
  time: string;
  difficulty: string;
  allergens: AllergensList;
  ingredients: Ingredient[];
  instructions: string[];
  advices?: string[]
}

export interface Ingredient {
  name: string;
  quantity: string;
}