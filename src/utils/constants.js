/**
 * Application constants
 */

// MockAPI base URL (replace with your MockAPI endpoint)
export const API_BASE_URL = 'https://YOUR_MOCKAPI_ID.mockapi.io/api/v1';

// Transaction types
export const TRANSACTION_TYPES = {
  DEPOSIT: 'Deposit',
  WITHDRAW: 'Withdraw',
  TRANSFER: 'Transfer',
};


export const FILTER_TYPES = {
  ALL: 'all',
  DEPOSIT: 'Deposit',
  WITHDRAW: 'Withdraw',
  TRANSFER: 'Transfer',
};

export const FILTER_DEFAULTS = {
  type: FILTER_TYPES.ALL,
  startDate: null,
  endDate: null,
};

// UI Text constants
export const UI_TEXT = {
  ALL: 'All',
  DEPOSIT: 'Deposit',
  WITHDRAW: 'Withdraw',
  TRANSFER: 'Transfer',
  FILTER_TRANSACTIONS: 'Filter Transactions',
  TRANSACTION_TYPE: 'Transaction Type',
  DATE_RANGE: 'Date Range',
  START_DATE: 'Start Date',
  END_DATE: 'End Date',
  RESET_FILTERS: 'Reset Filters',
  NO_TRANSACTIONS: 'No transactions found.',
  LOADING_TRANSACTIONS: 'Loading transactions...',
};

// Currency
export const DEFAULT_CURRENCY = 'ILS';

// Pagination
export const ITEMS_PER_PAGE = 10;

// Date format options
export const DATE_FORMAT_OPTIONS = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

