import { capitalize } from 'lodash';

export function getContainerNameFromField(field) {
  return capitalize(field) + 'Container';
}
