import { MONTHS } from './monthlyVegs'

export const mergeAllVegs = () => {
  const FRUITS = [...new Set(MONTHS.data.map((e: any, i: number) => e.fruits).flat())]
  const VEGETABLES = [...new Set(MONTHS.data.map((e: any, i: number) => e.vegetables).flat())]
  return [...FRUITS, ...VEGETABLES]
}