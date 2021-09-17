export type Vegetables =
  | 'beet'
  | 'chard'
  | 'artichoke'
  | 'carrot'
  | 'chicory'
  | 'cauliflower'
  | 'broccoli'
  | 'cabbage-head'
  | 'brussels-sprouts'
  | 'savoy-cabbage'
  | 'fennel'
  | 'lettuce'
  | 'leek'
  | 'parsley'
  | 'chicory'
  | 'radicchio'
  | 'celery'
  | 'spinach'
  | 'pumpkin'
  | 'asparagus'
  | 'onion'
  | 'garlic'
  | 'cucumber'
  | 'green-beans'
  | 'fava-beans'
  | 'eggplant'
  | 'pepper'
  | 'pea'
  | 'beans'
  | 'tomato'
  | 'zucchini';

export type Fruits =
  | 'banana'
  | 'orange'
  | 'chestnut'
  | 'clementine'
  | 'kiwi'
  | 'lemon'
  | 'tangerine'
  | 'apple'
  | 'pear'
  | 'grapefruit'
  | 'fig'
  | 'raspberry'
  | 'melon'
  | 'blueberry'
  | 'medlar'
  | 'peach'
  | 'plum'
  | 'grape'
  | 'pomegranate'
  | 'persimmon'
  | 'walnut'
  | 'avocado'
  | 'strawberry'
  | 'cherry'
  | 'apricot'
  | 'watermelon';

export type Months =
  | 'january'
  | 'february'
  | 'march'
  | 'april'
  | 'may'
  | 'june'
  | 'july'
  | 'august'
  | 'september'
  | 'october'
  | 'november'
  | 'december';

export type VegType = Fruits | Vegetables;

export interface Year {
  months: MonthProp[];
}
export interface MonthProp {
  id: number;
  month: string;
  fruits: Fruits[];
  vegetables: Vegetables[];
  firstTimeFruit?: Fruits[];
  lastTimeFruit?: Fruits[];
  lastTimeVeg?: Vegetables[];
  firstTimeVeg?: Vegetables[];
}

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
  recipes: Recipe[];
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
  advices?: string[];
}

export interface Ingredient {
  name: string;
  quantity: string;
}
