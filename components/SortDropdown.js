import React, { useState } from 'react';

function SortDropdown() {
  const [sortOption, setSortOption] = useState('recommended');

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    console.log('Selected Sort Option:', event.target.value);
  };

  return (
    <div className="sort-dropdown">
      <label htmlFor="sort" className="sort-label">Sort By:</label>
      <select id="sort" value={sortOption} onChange={handleSortChange} className="sort-select">
        <option value="recommended">RECOMMENDED</option>
        <option value="newest-first">NEWEST FIRST</option>
        <option value="popular">POPULAR</option>
        <option value="highest-price">PRICE: HIGH TO LOW</option>
        <option value="lowest-price">PRICE: LOW TO HIGH</option>
      </select>
    </div>
  );
}

export default SortDropdown;
