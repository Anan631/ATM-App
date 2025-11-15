import { useAuth } from "../../hooks/useAuth";
import Card from "../common/Card";
import Button from "../common/Button";
import "./QuickActions.css";

export default function QuickActions() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <Card className="quick-actions">
      <h3>Quick Stats</h3>
      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-icon">💳</span>
          <span className="stat-label">Account ID</span>
          <span className="stat-value">{user.id}</span>
        </div>
        <div className="stat-item">
          <span className="stat-icon">📊</span>
          <span className="stat-label">Transactions</span>
          <span className="stat-value">{user.transactions?.length || 0}</span>
        </div>
        <div className="stat-item">
          <span className="stat-icon">🎂</span>
          <span className="stat-label">Birthday</span>
          <span className="stat-value">{new Date(user.birthday).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
        </div>
      </div>
    </Card>
  );
}
