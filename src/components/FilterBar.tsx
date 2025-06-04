import React from 'react';
import type { Duration } from '../types/task';

interface FilterBarProps {
    currentFilter: Duration | 'All';
    onFilterChange: (filter: Duration | 'All') => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ currentFilter, onFilterChange }) => {
    const filters: (Duration | 'All')[] = ['All', 'Daily', 'Weekly', 'Monthly', 'Yearly'];

    return (
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => onFilterChange(filter)}
                    className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                        currentFilter === filter
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};

export default FilterBar; 