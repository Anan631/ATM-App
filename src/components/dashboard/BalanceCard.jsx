import React from "react";
import { useAuth } from "../../hooks/useAuth";
import "./BalanceCard.css";

export default function BalanceCard() {
  const { user } = useAuth();

  if (!user) return null;

  const balance = user.balance ?? 0;
  const balanceClass = balance > 0 ? "balance-positive" : "balance-zero";

  return (
    <div className="balance-card">
      <h2>Current Balance</h2>
      <p className={`balance-amount ${balanceClass}`}>
        {balance.toLocaleString()} ILS
      </p>
    </div>
  );
}
