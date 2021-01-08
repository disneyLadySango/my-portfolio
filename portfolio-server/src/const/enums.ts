export const Heading = {
  level1: 1,
  level2: 2,
  level3: 3,
} as const
export type Heading = typeof Heading[keyof typeof Heading]
