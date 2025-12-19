import { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import Card from '../common/Card';
import { FILTER_TYPES, FILTER_DEFAULTS, UI_TEXT } from '../../utils/constants';


export default function TransactionFilter({ filter, onFilterChange }) {
  const [localFilter, setLocalFilter] = useState(filter);

  const handleTypeChange = (type) => {
    const newFilter = { ...localFilter, type };
    setLocalFilter(newFilter);
    onFilterChange(newFilter);
  };

  const handleDateChange = (field, value) => {
    const newFilter = { ...localFilter, [field]: value || null };
    setLocalFilter(newFilter);
    onFilterChange(newFilter);
  };

  const handleReset = () => {
    setLocalFilter(FILTER_DEFAULTS);
    onFilterChange(FILTER_DEFAULTS);
  };

  return (
    <Card className="transaction-filter-card">
      <h3>{UI_TEXT.FILTER_TRANSACTIONS}</h3>
      
      <div className="filter-section">
        <label className="filter-label">{UI_TEXT.TRANSACTION_TYPE}</label>
        <div className="filter-buttons">
          <Button
            variant={localFilter.type === FILTER_TYPES.ALL ? 'primary' : 'secondary'}
            onClick={() => handleTypeChange(FILTER_TYPES.ALL)}
          >
            {UI_TEXT.ALL}
          </Button>
          <Button
            variant={localFilter.type === FILTER_TYPES.DEPOSIT ? 'primary' : 'secondary'}
            onClick={() => handleTypeChange(FILTER_TYPES.DEPOSIT)}
          >
            {UI_TEXT.DEPOSIT}
          </Button>
          <Button
            variant={localFilter.type === FILTER_TYPES.WITHDRAW ? 'primary' : 'secondary'}
            onClick={() => handleTypeChange(FILTER_TYPES.WITHDRAW)}
          >
            {UI_TEXT.WITHDRAW}
          </Button>
          <Button
            variant={localFilter.type === FILTER_TYPES.TRANSFER ? 'primary' : 'secondary'}
            onClick={() => handleTypeChange(FILTER_TYPES.TRANSFER)}
          >
            {UI_TEXT.TRANSFER}
          </Button>
        </div>
      </div>

      <div className="filter-section">
        <label className="filter-label">{UI_TEXT.DATE_RANGE}</label>
        <div className="date-filters">
          <Input
            type="date"
            label={UI_TEXT.START_DATE}
            value={localFilter.startDate || ''}
            onChange={(e) => handleDateChange('startDate', e.target.value)}
          />
          <Input
            type="date"
            label={UI_TEXT.END_DATE}
            value={localFilter.endDate || ''}
            onChange={(e) => handleDateChange('endDate', e.target.value)}
          />
        </div>
      </div>

      <div className="filter-actions">
        <Button variant="secondary" onClick={handleReset}>
          {UI_TEXT.RESET_FILTERS}
        </Button>
      </div>
    </Card>
  );
}

