import { commonFruits } from './fruit-categories/common';
import { uncommonFruits } from './fruit-categories/uncommon';
import { rareFruits } from './fruit-categories/rare';
import { legendaryFruits } from './fruit-categories/legendary';
import { mythicalFruits } from './fruit-categories/mythical';
import { Fruit } from './types';

export const fruits: Fruit[] = [
  ...commonFruits,
  ...uncommonFruits,
  ...rareFruits,
  ...legendaryFruits,
  ...mythicalFruits
];