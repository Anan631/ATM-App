import { useEffect, useState, useCallback } from "react";
import { applyTransactionFilters } from "../utils/filtering";
import { sortTransactionsByDateDesc } from "../utils/sorting";
import { FILTER_DEFAULTS } from "../utils/constants";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export function useTransactions(userId, userTransactions = null) {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [filter, setFilter] = useState(FILTER_DEFAULTS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const applyFilter = useCallback((list, filterConfig) => {
    const filtered = applyTransactionFilters(list, filterConfig);
    setFilteredTransactions(filtered);
  }, []);

  const fetchTransactions = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      if (userTransactions && Array.isArray(userTransactions)) {
        const sorted = sortTransactionsByDateDesc(userTransactions);
        setTransactions(sorted);
        applyFilter(sorted, filter);
        setLoading(false);
        return;
      }

      const res = await fetch(`${API_BASE_URL}/users?id=${userId}`);
      if (!res.ok) throw new Error("Failed to load user data");

      const user = await res.json();
      const list = user[0]?.transactions || [];

      const sorted = sortTransactionsByDateDesc(list);

      setTransactions(sorted);
      applyFilter(sorted, filter);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [userId, filter, applyFilter, userTransactions]);

  useEffect(() => {
    applyFilter(transactions, filter);
  }, [filter, transactions, applyFilter]);

  useEffect(() => {
    if (userTransactions && Array.isArray(userTransactions)) {
      const sorted = sortTransactionsByDateDesc(userTransactions);
      setTransactions(sorted);
      applyFilter(sorted, filter);
      setLoading(false);
    } else if (userId) {
      fetchTransactions();
    }
  }, [userId, userTransactions, filter, applyFilter, fetchTransactions]);

  return {
    transactions,
    filteredTransactions,
    filter,
    setFilter,
    loading,
    error,
    refreshTransactions: fetchTransactions,
  };
}
