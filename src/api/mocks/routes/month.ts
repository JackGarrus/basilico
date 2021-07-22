import { rest } from 'msw';
import { MONTHS } from 'data/monthlyVegs';

export const getMonthlyVegsList = rest.get(
     '*/months',
     (req, res, ctx) => res(ctx.status(200), ctx.json(MONTHS)),
);