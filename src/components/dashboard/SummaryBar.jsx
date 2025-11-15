import Card from "../common/Card";
import "./SummaryBar.css";

export default function SummaryBar({ summary }) {
  return (
    <Card className="summary-bar">
      <div className="summary-item">
        <span className="summary-label">Total Deposits</span>
        <span className="summary-value deposits">{summary.deposits.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        <span className="summary-currency">ILS</span>
      </div>
      <div className="summary-divider"></div>
      <div className="summary-item">
        <span className="summary-label">Total Withdrawals</span>
        <span className="summary-value withdrawals">{summary.withdrawals.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        <span className="summary-currency">ILS</span>
      </div>
    </Card>
  );
}
