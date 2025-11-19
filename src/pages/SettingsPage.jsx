<<<<<<< Updated upstream
=======
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import ConfirmationDialog from '../components/popups/ConfirmationDialog';
import { clearTransactions, updateBalance } from '../services/transactionService';
import './SettingsPage.css';

export default function SettingsPage() {
  const { user, refreshUser, updateUser } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  if (!user) {
    return (
      <div className="page-container settings-page">
        <p>Loading...</p>
      </div>
    );
  }

  const handleResetAccount = async () => {
    setShowConfirmReset(false);
    setIsResetting(true);
    
    try {
      if (!user || !user.id) {
        throw new Error('User ID not found. Please log in again.');
      }

      let resetUser;
      try {
        resetUser = await clearTransactions(user.id, user);
      } catch (error) {
        console.error('Error clearing transactions:', error);
        resetUser = {
          ...user,
          balance: 0,
          transactions: [],
        };
      }

      if (resetUser) {
        updateUser({
          balance: 0,
          transactions: [],
        });
      }
      
      showToast('Account reset successfully', 'success', 3000);
      
      setTimeout(() => {
        navigate('/dashboard', { replace: true });
      }, 1000);
    } catch (error) {
      const errorMessage = error.message || 'Failed to reset account';
      showToast(`Failed to reset account: ${errorMessage}`, 'error', 4000);
      console.error('Reset account error:', error);
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <div className="page-container settings-page">
      <h1>Settings</h1>
      
      <Card className="settings-card">
        <h2>Theme</h2>
        <div className="settings-section">
          <p>Current theme: <strong>{isDark ? '🌙 Dark' : '☀️ Light'}</strong></p>
          <Button onClick={toggleTheme} className="settings-button">
            {isDark ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode'}
          </Button>
        </div>
      </Card>

      <Card className="settings-card">
        <h2>Account Management</h2>
        <div className="settings-section">
          <p>⚠️ Reset your account data (balance and transaction history)</p>
          <Button 
            onClick={() => setShowConfirmReset(true)}
            className="settings-button danger"
            disabled={isResetting}
          >
            {isResetting ? 'Resetting...' : '🔄 Reset Account'}
          </Button>
        </div>
      </Card>

      {showConfirmReset && (
        <ConfirmationDialog
          title="Reset Account?"
          message="This will clear all transactions and set your balance to zero. This action cannot be undone."
          onConfirm={handleResetAccount}
          onCancel={() => setShowConfirmReset(false)}
          confirmText="Reset"
          cancelText="Cancel"
        />
      )}
    </div>
  );
}
>>>>>>> Stashed changes
