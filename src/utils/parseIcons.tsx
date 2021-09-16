import { Fruits, Vegetables, Allergens } from 'types/types';
import { ReactComponent as Apple } from 'icons/fruits/apple.svg';
import { ReactComponent as Apricot } from 'icons/fruits/apricot.svg';
import { ReactComponent as Avocado } from 'icons/fruits/avocado.svg';
import { ReactComponent as Banana } from 'icons/fruits/banana.svg';
import { ReactComponent as BlueBerries } from 'icons/fruits/blueberry.svg';
import { ReactComponent as Cherry } from 'icons/fruits/cherry.svg';
import { ReactComponent as Chestnut } from 'icons/fruits/chestnut.svg';
import { ReactComponent as Clementine } from 'icons/fruits/clementine.svg';
import { ReactComponent as Fig } from 'icons/fruits/fig.svg';
import { ReactComponent as Grape } from 'icons/fruits/grape.svg';
import { ReactComponent as Grapefruit } from 'icons/fruits/grapefruit.svg';
import { ReactComponent as Kiwi } from 'icons/fruits/kiwi.svg';
import { ReactComponent as Lemon } from 'icons/fruits/lemon.svg';
import { ReactComponent as Melon } from 'icons/fruits/melon.svg';
import { ReactComponent as Orange } from 'icons/fruits/orange.svg';
import { ReactComponent as Peach } from 'icons/fruits/peach.svg';
import { ReactComponent as Pear } from 'icons/fruits/pear.svg';
import { ReactComponent as Plum } from 'icons/fruits/plum.svg';
import { ReactComponent as Pomegranate } from 'icons/fruits/pomegranate.svg';
import { ReactComponent as Raspberry } from 'icons/fruits/raspberry.svg';
import { ReactComponent as Strawberry } from 'icons/fruits/strawberry.svg';
import { ReactComponent as Tangerine } from 'icons/fruits/tangerine.svg';
import { ReactComponent as Walnut } from 'icons/fruits/walnut.svg';
import { ReactComponent as Watermelon } from 'icons/fruits/watermelon.svg';
import { ReactComponent as Artichoke } from 'icons/vegetables/artichoke.svg';
import { ReactComponent as Asparagus } from 'icons/vegetables/asparagus.svg';
import { ReactComponent as Beans } from 'icons/vegetables/beans.svg';
import { ReactComponent as Beet } from 'icons/vegetables/beet.svg';
import { ReactComponent as Broccoli } from 'icons/vegetables/broccoli.svg';
import { ReactComponent as BrusselSprouts } from 'icons/vegetables/brussels-sprouts.svg';
import { ReactComponent as Cabbage } from 'icons/vegetables/cabbage.svg';
import { ReactComponent as Carrot } from 'icons/vegetables/carrot.svg';
import { ReactComponent as Cauliflower } from 'icons/vegetables/cauliflower.svg';
import { ReactComponent as Celery } from 'icons/vegetables/celery.svg';
import { ReactComponent as Cucumber } from 'icons/vegetables/cucumber.svg';
import { ReactComponent as Eggplant } from 'icons/vegetables/eggplant.svg';
import { ReactComponent as Fennel } from 'icons/vegetables/fennel.svg';
import { ReactComponent as Garlic } from 'icons/vegetables/garlic.svg';
import { ReactComponent as Leek } from 'icons/vegetables/leek.svg';
import { ReactComponent as Lettuce } from 'icons/vegetables/lettuce.svg';
import { ReactComponent as Onion } from 'icons/vegetables/onion.svg';
import { ReactComponent as Parsley } from 'icons/vegetables/parsley.svg';
import { ReactComponent as Peas } from 'icons/vegetables/peas.svg';
import { ReactComponent as Pepper } from 'icons/vegetables/pepper.svg';
import { ReactComponent as Pumpkin } from 'icons/vegetables/pumpkin.svg';
import { ReactComponent as Spinach } from 'icons/vegetables/spinach.svg';
import { ReactComponent as Tomato } from 'icons/vegetables/tomato.svg';
import { ReactComponent as Zucchini } from 'icons/vegetables/zucchini.svg';

import medlar from 'icons/fruits/medlar.png';
import persimmon from 'icons/fruits/medlar.png';
import savoyCabbage from 'icons/vegetables/savoy-cabbage.png';
import chicory from 'icons/vegetables/chicory.jpeg';
import fava from 'icons/vegetables/fava.png';
import greenBean from 'icons/vegetables/green-bean.jpeg';
import radicchio from 'icons/vegetables/radicchio.png';
import chard from 'icons/vegetables/chard.png';

import { ReactComponent as Fish } from 'icons/recipe-type/fish.svg';
import { ReactComponent as Vegan } from 'icons/recipe-type/leaf.svg';
import { ReactComponent as Meat } from 'icons/recipe-type/meat.svg';
import { ReactComponent as Vegetarian } from 'icons/recipe-type/meatless.svg';
import { ReactComponent as Sweet } from 'icons/recipe-type/sweet.svg';

import { ReactComponent as Egg } from 'icons/allergens/egg.svg';
import { ReactComponent as Milk } from 'icons/allergens/milk.svg';
import { ReactComponent as Nuts } from 'icons/allergens/nuts.svg';
import { ReactComponent as Seeds } from 'icons/allergens/seeds.svg';
import { ReactComponent as Soy } from 'icons/allergens/soy.svg';
import { ReactComponent as Wheat } from 'icons/allergens/wheat.svg';

import style from './icons.module.scss';

const icons: Record<Fruits | Vegetables, JSX.Element | HTMLImageElement> = {
  apple: <Apple className={style.icon} />,
  apricot: <Apricot className={style.icon} />,
  avocado: <Avocado className={style.icon} />,
  banana: <Banana className={style.icon} />,
  blueberry: <BlueBerries className={style.icon} />,
  cherry: <Cherry className={style.icon} />,
  chestnut: <Chestnut className={style.icon} />,
  clementine: <Clementine className={style.icon} />,
  grape: <Grape className={style.icon} />,
  grapefruit: <Grapefruit className={style.icon} />,
  kiwi: <Kiwi className={style.icon} />,
  lemon: <Lemon className={style.icon} />,
  melon: <Melon className={style.icon} />,
  orange: <Orange className={style.icon} />,
  peach: <Peach className={style.icon} />,
  pear: <Pear className={style.icon} />,
  plum: <Plum className={style.icon} />,
  pomegranate: <Pomegranate className={style.icon} />,
  raspberry: <Raspberry className={style.icon} />,
  strawberry: <Strawberry className={style.icon} />,
  tangerine: <Tangerine className={style.icon} />,
  walnut: <Walnut className={style.icon} />,
  watermelon: <Watermelon className={style.icon} />,
  fig: <Fig className={style.icon} />,

  medlar: <img src={medlar} className={style.icon} alt="medlar" />,
  persimmon: <img src={persimmon} className={style.icon} alt="persimmon" />,
  // veggies
  'savoy-cabbage': (
    <img src={savoyCabbage} className={style.icon} alt="savoy-cabbage" />
  ),
  chicory: <img src={chicory} className={style.icon} alt="chicory" />,
  'fava-beans': <img src={fava} className={style.icon} alt="fava-beans" />,
  'green-beans': (
    <img src={greenBean} className={style.icon} alt="green-beans" />
  ),
  radicchio: <img src={radicchio} className={style.icon} alt="radicchio" />,
  chard: <img src={chard} className={style.icon} alt="chard" />,

  artichoke: <Artichoke className={style.icon} />,
  asparagus: <Asparagus className={style.icon} />,
  beans: <Beans className={style.icon} />,
  beet: <Beet className={style.icon} />,
  broccoli: <Broccoli className={style.icon} />,
  'brussels-sprouts': <BrusselSprouts className={style.icon} />,
  'cabbage-head': <Cabbage className={style.icon} />,
  carrot: <Carrot className={style.icon} />,
  cauliflower: <Cauliflower className={style.icon} />,
  celery: <Celery className={style.icon} />,
  cucumber: <Cucumber className={style.icon} />,
  eggplant: <Eggplant className={style.icon} />,
  fennel: <Fennel className={style.icon} />,
  garlic: <Garlic className={style.icon} />,
  leek: <Leek className={style.icon} />,
  lettuce: <Lettuce className={style.icon} />,
  onion: <Onion className={style.icon} />,
  parsley: <Parsley className={style.icon} />,
  pea: <Peas className={style.icon} />,
  pepper: <Pepper className={style.icon} />,
  pumpkin: <Pumpkin className={style.icon} />,
  spinach: <Spinach className={style.icon} />,
  tomato: <Tomato className={style.icon} />,
  zucchini: <Zucchini className={style.icon} />,
};

const generics: Record<string, JSX.Element> = {
  fish: <Fish className={style.icon} />,
  vegan: <Vegan className={style.icon} />,
  meat: <Meat className={style.icon} />,
  vegetarian: <Vegetarian className={style.icon} />,
  sweet: <Sweet className={style.icon} />,
};

const allergens: Record<Allergens, JSX.Element> = {
  eggs: <Egg className={style.allergensIcon} />,
  lactose: <Milk className={style.allergensIcon} />,
  nuts: <Nuts className={style.allergensIcon} />,
  seeds: <Seeds className={style.allergensIcon} />,
  soy: <Soy className={style.allergensIcon} />,
  gluten: <Wheat className={style.allergensIcon} />,
};

export const parseVeggiesIcons = (
  iconName: Fruits | Vegetables,
  className: string,
): JSX.Element | HTMLImageElement => icons[iconName];
export const parseGenerics = (
  generic: string,
  className?: string,
): JSX.Element => generics[generic];
export const parseAllergens = (
  allergene: Allergens,
  className?: string,
): JSX.Element => allergens[allergene];
