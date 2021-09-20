import { MONTHLY_VEGS } from 'data/monthlyVegs'
import { RECIPES } from 'data/recipes'
import { rest } from 'msw'
import { filterAllergens } from 'utils/vegUtils';

export const handlers = [
 rest.get('/recipes', (req, res, ctx) => {
   const filterArray = req.url.searchParams.getAll('allergens');
    if(filterArray.length > 0) { 
      return res(
        ctx.status(200),
        ctx.json(filterAllergens(filterArray)),
      )
    }
    return res(
      ctx.status(200),
      ctx.json(RECIPES),
    )
  }),

  rest.get('/monthlyVegs',(req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(MONTHLY_VEGS),
    )
  }),
]