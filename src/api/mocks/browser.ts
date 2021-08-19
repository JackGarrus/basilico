import { setupWorker } from 'msw';
import { getMonthlyVegsList } from './routes/month';

export const handlers = [getMonthlyVegsList];
const worker = setupWorker(...handlers);
export default worker;