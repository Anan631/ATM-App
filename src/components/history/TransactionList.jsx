import TransactionCard from '../transactions/TransactionCard';
import { UI_TEXT } from '../../utils/constants';


export default function TransactionList({ transactions, loading, error }) {
  if (loading) {
    return (
      <div className="transaction-list-loading">
        <p>{UI_TEXT.LOADING_TRANSACTIONS}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="transaction-list-error">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (transactions.length === 0) {
    return (
      <div className="transaction-list-empty">
        <p>{UI_TEXT.NO_TRANSACTIONS}</p>
      </div>
    );
  }

  return (
    <div className="transaction-list">
      {transactions.map((transaction) => (
        <TransactionCard key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}

