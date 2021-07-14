/* Ho dovuto inserire un id per oggetto perchè altrimenti il browser mi ordinava
l''array in ordine alfabetico, sballandomi l'ordine corretto dei mesi
*/
export const MONTHS = [
  {
    id: 0,
    month: 'january',
    firstTimeFruit: [],
    lastTimeFruit: [],
    firstTimeVeg: [],
    lastTimeVeg: [],
    fruits: [
      'banana',
      'orange',
      'chestnut',
      'clementine',
      'kiwi',
      'lemon',
      'tangerine',
      'apple',
      'pear',
      'grapefruit',
    ],
    vegetables: [
      'beet',
      'chard',
      'artichoke',
      'carrot',
      'cauliflower',
      'broccoli',
      'cabbage-head',
      'brussels-sprouts',
      'savoy-cabbage',
      'fennel',
      'lettuce',
      'leek',
      'parsley',
      'chicory',
      'radicchio',
      'celery',
      'spinach',
      'pumpkin',
    ],
  },
  {
    id: 1,
    month: 'february',
    firstTimeFruit: [],
    lastTimeFruit: ['chestnut'],
    firstTimeVeg: [],
    lastTimeVeg: ['pea', 'beet', 'pumpkin'],
    fruits: [
      'banana',
      'orange',
      'chestnut',
      'clementine',
      'kiwi',
      'lemon',
      'tangerine',
      'apple',
      'pear',
      'grapefruit',
    ],
    vegetables: [
      'beet',
      'chard',
      'artichoke',
      'carrot',
      'cauliflower',
      'broccoli',
      'cabbage-head',
      'brussels-sprouts',
      'savoy-cabbage',
      'fennel',
      'lettuce',
      'leek',
      'parsley',
      'chicory',
      'radicchio',
      'celery',
      'spinach',
      'pumpkin',
    ],
  },
  {
    id: 2,
    month: 'march',
    firstTimeFruit: ['clementine', 'tangerine'],
    lastTimeFruit: ['chestnut'],
    firstTimeVeg: ['asparagus', 'onion'],
    lastTimeVeg: ['cabbage-head', 'brussels-sprouts'],
    fruits: [
      'banana',
      'orange',
      'clementine',
      'kiwi',
      'lemon',
      'tangerine',
      'apple',
      'pear',
      'grapefruit',
    ],
    vegetables: [
      'asparagus',
      'chard',
      'artichoke',
      'carrot',
      'cauliflower',
      'broccoli',
      'cabbage-head',
      'brussels-sprouts',
      'savoy-cabbage',
      'fennel',
      'onion',
      'lettuce',
      'leek',
      'parsley',
      'chicory',
      'radicchio',
      'celery',
      'spinach',
    ],
  },
  {
    id: 3,
    month: 'april',
    firstTimeFruit: ['strawberry', 'medlar'],
    lastTimeFruit: ['lemon'],
    firstTimeVeg: [
      'garlic',
      'cucumber',
      'green-beans',
      'fava-beans',
      'eggplant',
      'pepper',
      'pea',
      'leek',
    ],
    lastTimeVeg: ['broccoli', 'savoy-cabbage', 'fenel'],
    fruits: [
      'banana',
      'orange',
      'strawberry',
      'kiwi',
      'lemon',
      'medlar',
      'apple',
      'pear',
      'grapefruit',
    ],
    vegetables: [
      'garlic',
      'asparagus',
      'chard',
      'artichoke',
      'carrot',
      'cauliflower',
      'broccoli',
      'cucumber',
      'savoy-cabbage',
      'fennel',
      'onion',
      'green-beans',
      'fava-beans',
      'lettuce',
      'eggplant',
      'pepper',
      'pea',
      'leek',
      'parsley',
      'chicory',
      'radicchio',
      'celery',
      'spinach',
    ],
  },
  {
    id: 4,
    month: 'may',
    firstTimeFruit: ['cherry', 'raspberry', 'peach'],
    lastTimeFruit: ['orange', 'kiwi', 'apple', 'medlar', 'pear', 'grapefruit'],
    firstTimeVeg: ['beet', 'beans', 'tomato', 'zucchini'],
    lastTimeVeg: ['artichoke', 'cauliflower', 'spinach'],
    fruits: [
      'banana',
      'orange',
      'cherry',
      'strawberry',
      'kiwi',
      'raspberry',
      'medlar',
      'apple',
      'pear',
      'peach',
      'grapefruit',
    ],
    vegetables: [
      'garlic',
      'asparagus',
      'chard',
      'artichoke',
      'carrot',
      'cauliflower',
      'cucumber',
      'onion',
      'beans',
      'green-beans',
      'fava-beans',
      'lettuce',
      'eggplant',
      'pepper',
      'pea',
      'tomato',
      'parsley',
      'chicory',
      'radicchio',
      'celery',
      'spinach',
      'zucchini',
    ],
  },
  {
    id: 5,
    month: 'june',
    firstTimeFruit: [
      'apricot',
      'watermelon',
      'fig',
      'melon',
      'blueberry',
      'plum',
    ],
    lastTimeFruit: [],
    firstTimeVeg: [],
    lastTimeVeg: ['pea'],
    fruits: [
      'banana',
      'apricot',
      'watermelon',
      'cherry',
      'fig',
      'strawberry',
      'raspberry',
      'melon',
      'blueberry',
      'peach',
      'plum',
    ],
    vegetables: [
      'garlic',
      'asparagus',
      'beet',
      'chard',
      'carrot',
      'cucumber',
      'onion',
      'beans',
      'green-beans',
      'fava-beans',
      'lettuce',
      'eggplant',
      'pepper',
      'pea',
      'tomato',
      'parsley',
      'chicory',
      'radicchio',
      'celery',
      'zucchini',
    ],
  },
  {
    id: 6,
    month: 'july',
    firstTimeFruit: ['grape'],
    lastTimeFruit: ['cherry', 'strawbarry'],
    firstTimeVeg: [],
    lastTimeVeg: [],
    fruits: [
      'banana',
      'apricot',
      'watermelon',
      'cherry',
      'fig',
      'strawberry',
      'raspberry',
      'melon',
      'blueberry',
      'peach',
      'plum',
      'grape',
    ],
    vegetables: [
      'garlic',
      'beet',
      'chard',
      'carrot',
      'cucumber',
      'onion',
      'beans',
      'green-beans',
      'fava-beans',
      'lettuce',
      'eggplant',
      'pepper',
      'tomato',
      'parsley',
      'chicory',
      'radicchio',
      'celery',
      'zucchini',
    ],
  },
  {
    id: 7,
    month: 'august',
    firstTimeFruit: ['pear', 'apple'],
    lastTimeFruit: ['apricot', 'watermelon'],
    firstTimeVeg: ['fenel', 'pumpkin'],
    lastTimeVeg: [],
    fruits: [
      'banana',
      'apricot',
      'watermelon',
      'fig',
      'raspberry',
      'apple',
      'melon',
      'blueberry',
      'pear',
      'peach',
      'plum',
      'grape',
    ],
    vegetables: [
      'garlic',
      'beet',
      'chard',
      'carrot',
      'cucumber',
      'onion',
      'beans',
      'green-beans',
      'fava-beans',
      'fennel',
      'lettuce',
      'eggplant',
      'pepper',
      'tomato',
      'parsley',
      'chicory',
      'radicchio',
      'celery',
      'pumpkin',
      'zucchini',
    ],
  },
  {
    id: 8,
    month: 'september',
    firstTimeFruit: [],
    lastTimeFruit: ['fig', 'melon', 'blueberry', 'peach', 'plum'],
    firstTimeVeg: ['cauliflower', 'broccoli', 'savoy-cabbage', 'spinach'],
    lastTimeVeg: ['cucumber'],
    fruits: [
      'banana',
      'fig',
      'raspberry',
      'apple',
      'melon',
      'blueberry',
      'pear',
      'peach',
      'plum',
      'grape',
    ],
    vegetables: [
      'garlic',
      'beet',
      'chard',
      'carrot',
      'cauliflower',
      'broccoli',
      'savoy-cabbage',
      'cucumber',
      'onion',
      'beans',
      'green-beans',
      'fava-beans',
      'fennel',
      'lettuce',
      'eggplant',
      'pepper',
      'tomato',
      'parsley',
      'chicory',
      'radicchio',
      'celery',
      'spinach',
      'pumpkin',
      'zucchini',
    ],
  },
  {
    id: 9,
    month: 'october',
    firstTimeFruit: [
      'pomegranate',
      'persimmon',
      'chestnut',
      'clementine',
      'walnut',
      'kiwi',
      'lemon',
    ],
    lastTimeFruit: ['raspberry'],
    firstTimeVeg: ['artichoke', 'cabbage-head', 'brussels-sprouts', 'leek'],
    lastTimeVeg: [
      'green-beans',
      'fava-beans',
      'eggplant',
      'tomato',
      'pepper',
      'zucchini',
    ],
    fruits: [
      'banana',
      'pomegranate',
      'persimmon',
      'chestnut',
      'clementine',
      'fig',
      'kiwi',
      'raspberry',
      'lemon',
      'apple',
      'walnut',
      'pear',
      'grape',
    ],
    vegetables: [
      'garlic',
      'beet',
      'chard',
      'artichoke',
      'carrot',
      'cauliflower',
      'broccoli',
      'cabbage-head',
      'brussels-sprouts',
      'savoy-cabbage',
      'onion',
      'beans',
      'green-beans',
      'fava-beans',
      'fennel',
      'lettuce',
      'eggplant',
      'pepper',
      'tomato',
      'leek',
      'parsley',
      'chicory',
      'radicchio',
      'celery',
      'spinach',
      'pumpkin',
      'zucchini',
    ],
  },
  {
    id: 10,
    month: 'november',
    firstTimeFruit: ['avocado', 'orange', 'tangerine', 'grapefruit'],
    lastTimeFruit: ['grape'],
    firstTimeVeg: [],
    lastTimeVeg: ['garlic', 'bean', 'celery'],
    fruits: [
      'banana',
      'pomegranate',
      'avocado',
      'orange',
      'persimmon',
      'chestnut',
      'clementine',
      'fig',
      'kiwi',
      'lemon',
      'tangerine',
      'apple',
      'walnut',
      'pear',
      'grapefruit',
      'grape',
    ],
    vegetables: [
      'garlic',
      'beet',
      'chard',
      'artichoke',
      'carrot',
      'cauliflower',
      'broccoli',
      'cabbage-head',
      'brussels-sprouts',
      'savoy-cabbage',
      'onion',
      'beans',
      'fennel',
      'lettuce',
      'leek',
      'parsley',
      'chicory',
      'radicchio',
      'celery',
      'spinach',
      'pumpkin',
    ],
  },
  {
    id: 11,
    month: 'december',
    firstTimeFruit: [],
    lastTimeFruit: ['avocado', 'persimmon', 'walnut', 'pomegranate'],
    firstTimeVeg: [],
    lastTimeVeg: ['onion'],
    fruits: [
      'banana',
      'pomegranate',
      'avocado',
      'orange',
      'persimmon',
      'chestnut',
      'clementine',
      'fig',
      'kiwi',
      'lemon',
      'tangerine',
      'apple',
      'walnut',
      'pear',
      'grapefruit',
    ],
    vegetables: [
      'beet',
      'chard',
      'artichoke',
      'carrot',
      'cauliflower',
      'broccoli',
      'cabbage-head',
      'brussels-sprouts',
      'savoy-cabbage',
      'onion',
      'fennel',
      'lettuce',
      'leek',
      'chicory',
      'radicchio',
      'celery',
      'spinach',
      'pumpkin',
    ],
  },
];