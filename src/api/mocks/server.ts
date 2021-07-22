import { setupServer } from 'msw/node';
import { rest } from 'msw';
import {
     getMonthlyVegsList
} from './routes/month';

export const handlers = [
     getMonthlyVegsList
];

// Setup server with all the handlers needed to test components
const server = setupServer(...handlers);
export { server, rest };
