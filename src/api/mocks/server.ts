import { setupServer } from 'msw/node';
import { rest } from 'msw';
import {
     getMonths
} from './routes/month';

export const handlers = [
     getMonths
];

// Setup server with all the handlers needed to test components
const server = setupServer(...handlers);
export { server, rest };
