import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WithdrawForm from '../components/transactions/WithdrawForm';
import { useAuth } from '../hooks/useAuth';
import { getBalance } from '../services/transactionService';

export default function WithdrawPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  if (!user) {
    return (
      <div className="page-container withdraw-page">
        <p>Loading...</p>
      </div>
    );
  }

  console.log('WithdrawPage - User object:', user);
  console.log('WithdrawPage - User ID:', user.id);
  console.log('WithdrawPage - User keys:', user ? Object.keys(user) : 'No user');

  if (!user.id) {
    console.error('User ID is missing! User object:', user);
    return (
      <div className="page-container withdraw-page">
        <p>Error: User ID not found. Please log in again.</p>
        <p style={{ fontSize: '12px', color: '#666' }}>User object keys: {user ? Object.keys(user).join(', ') : 'No user'}</p>
      </div>
    );
  }

  const balance = user.balance ?? 0;

  const handleSuccess = async (amount) => {
    try {
      const updatedBalance = await getBalance(user.id);
    } catch (error) {
      console.error('Failed to refresh balance:', error);
    }
  };

  return (
    <div className="page-container withdraw-page">
      <h1>Withdraw Money</h1>
      <WithdrawForm 
        userId={user.id}
        balance={balance}
        onSuccess={handleSuccess}
      />
    </div>
  );
}
