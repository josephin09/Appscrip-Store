import React, { useState } from 'react';

function FilterMenu() {
  const [filterOptions, setFilterOptions] = useState({
    customizable: false,
    idealFor: [], 
    occasion: 'all', 
    work: 'all', 
    fabric: 'all', 
    segment: 'all', 
    suitableFor: 'all', 
    rawMaterials: 'all', 
    pattern: 'all',
  });

  const [showFilters, setShowFilters] = useState(true); // State to toggle filter visibility

  const handleFilterChange = (event) => {
    const { name, value, type, checked } = event.target;

    // Handle idealFor select and checkboxes logic
    if (name === 'idealFor') {
      if (type === 'select-one') {
        if (value === 'all') {
          setFilterOptions((prevOptions) => ({
            ...prevOptions,
            idealFor: ['men', 'women', 'babyAndKids'], 
          }));
        } else if (value === 'none') {
          setFilterOptions((prevOptions) => ({
            ...prevOptions,
            idealFor: [], 
          }));
        }
      } else if (type === 'checkbox') {
        setFilterOptions((prevOptions) => {
          const newIdealFor = checked
            ? [...prevOptions.idealFor, value]
            : prevOptions.idealFor.filter((item) => item !== value);

          return {
            ...prevOptions,
            idealFor: newIdealFor,
          };
        });
      }
    } else {
      setFilterOptions((prevOptions) => ({
        ...prevOptions,
        [name]: value,
      }));
    }
  };

  const toggleFilters = () => {
    setShowFilters((prevShowFilters) => !prevShowFilters); // Toggle the filter visibility
  };

  const dropdownValue =
    filterOptions.idealFor.length === 3 ? 'all' : filterOptions.idealFor.length === 0 ? 'none' : '';

  return (
    <div className="filter-menu">
      <div className="filter-header">
        <span className="item-count">3425 ITEMS</span>
        <button className="hide-filter" onClick={toggleFilters}>
          {showFilters ? 'HIDE FILTER' : 'SHOW FILTER'} 
        </button>
      </div>

      {showFilters && (
        <div className="filter-section">
          <label className="filter-label">
            <input
              type="checkbox"
              className="filter-checkbox"
              name="customizable"
              checked={filterOptions.customizable}
              onChange={handleFilterChange}
            />
            CUSTOMIZABLE
          </label>

          <div className="filter-dropdown">
            <label className="filter-label">IDEAL FOR</label>
            <select
              className="filter-select"
              name="idealFor"
              value={dropdownValue} 
              onChange={handleFilterChange}
            >
              <option value="all">All</option>
              <option value="none">Unselect All</option>
            </select>

            <div className="filter-checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="idealFor"
                  value="men"
                  checked={filterOptions.idealFor.includes('men')}
                  onChange={handleFilterChange}
                />
                Men
              </label>
              <label>
                <input
                  type="checkbox"
                  name="idealFor"
                  value="women"
                  checked={filterOptions.idealFor.includes('women')}
                  onChange={handleFilterChange}
                />
                Women
              </label>
              <label>
                <input
                  type="checkbox"
                  name="idealFor"
                  value="babyAndKids"
                  checked={filterOptions.idealFor.includes('babyAndKids')}
                  onChange={handleFilterChange}
                />
                Baby & Kids
              </label>
            </div>
          </div>

 
          <label className="filter-label">OCCASION</label>
          <select
            className="filter-select"
            name="occasion"
            value={filterOptions.occasion}
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
          </select>

          <label className="filter-label">WORK</label>
          <select
            className="filter-select"
            name="work"
            value={filterOptions.work}
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
          </select>

          <label className="filter-label">FABRIC</label>
          <select
            className="filter-select"
            name="fabric"
            value={filterOptions.fabric}
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="cotton">Cotton</option>
            <option value="wool">Wool</option>
          </select>

          <label className="filter-label">SEGMENT</label>
          <select
            className="filter-select"
            name="segment"
            value={filterOptions.segment}
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="luxury">Luxury</option>
            <option value="budget">Budget</option>
          </select>

          <label className="filter-label">SUITABLE FOR</label>
          <select
            className="filter-select"
            name="suitableFor"
            value={filterOptions.suitableFor}
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="adults">Adults</option>
            <option value="kids">Kids</option>
          </select>

          <label className="filter-label">RAW MATERIALS</label>
          <select
            className="filter-select"
            name="rawMaterials"
            value={filterOptions.rawMaterials}
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="polyester">Polyester</option>
            <option value="cotton">Cotton</option>
          </select>

          <label className="filter-label">PATTERN</label>
          <select
            className="filter-select"
            name="pattern"
            value={filterOptions.pattern}
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="striped">Striped</option>
            <option value="plain">Plain</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default FilterMenu;


