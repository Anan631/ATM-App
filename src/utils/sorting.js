
export function sortTransactionsByDateDesc(transactions) {
  return [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));
}


export function sortTransactionsByDateAsc(transactions) {
  return [...transactions].sort((a, b) => new Date(a.date) - new Date(b.date));
}


export function sortTransactionsByAmountDesc(transactions) {
  return [...transactions].sort((a, b) => b.amount - a.amount);
}


export function sortTransactionsByAmountAsc(transactions) {
  return [...transactions].sort((a, b) => a.amount - b.amount);
}
