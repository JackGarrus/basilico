import { setupWorker } from 'msw';
import { getMonthlyVegsList } from './routes/month';

// Setup worker with all the handlers to be used with browser
const worker = setupWorker(...[getMonthlyVegsList]);
export default worker;