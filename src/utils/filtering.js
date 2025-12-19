

import { FILTER_TYPES } from './constants';


export function applyTransactionFilters(transactions, filterConfig) {
  let result = [...transactions];

  // Filter by transaction type
  if (filterConfig.type && filterConfig.type !== FILTER_TYPES.ALL) {
    result = result.filter(
      (transaction) => transaction.type.toLowerCase() === filterConfig.type.toLowerCase()
    );
  }

  // Filter by start date
  if (filterConfig.startDate) {
    const startDate = new Date(filterConfig.startDate);
    result = result.filter((transaction) => new Date(transaction.date) >= startDate);
  }

  // Filter by end date
  if (filterConfig.endDate) {
    const endDate = new Date(filterConfig.endDate);
    result = result.filter((transaction) => new Date(transaction.date) <= endDate);
  }

  return result;
}


export function filterBy(items, predicate) {
  return items.filter(predicate);
}


export function filterByProperty(items, property, value) {
  return items.filter(item => item[property] === value);
}
