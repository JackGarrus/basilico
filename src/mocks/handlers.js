import { RECIPES } from 'data/recipes'
import { rest } from 'msw'

export const handlers = [
 rest.get('/recipes', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(RECIPES),
    )
  }),
]