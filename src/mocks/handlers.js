import { MONTHLY_VEGS } from 'data/monthlyVegs';
import { RECIPES } from 'data/recipes';
import { rest } from 'msw';
import { filterAllergens } from 'utils/vegUtils';
import { parse } from 'qs';

export const handlers = [
  rest.get('/recipes', (req, res, ctx) => {
    const params = req.url.searchParams.getAll('allergens');
    const allergens = Object.values(
      parse(params, { comma: true, parseArrays: true, delimiter: ',' }),
    );

    if (allergens.length > 0) {
      return res(ctx.status(200), ctx.json(filterAllergens(allergens)));
    } else {
      return res(ctx.status(200), ctx.json(RECIPES));
    }
  }),

  rest.get('/monthlyVegs', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MONTHLY_VEGS));
  }),
];
