import React, { useState, useEffect } from 'react';
import ALL_CATEGORIES, { getSubCategories } from '../../../backend/src/utils/categories.js';

const CategoryFilter = ({
  type = 'expense',
  onFilterChange,
  initialCategory = '',
  initialSubCategory = ''
}) => {
  const [category, setCategory] = useState(initialCategory);
  const [subCategory, setSubCategory] = useState(initialSubCategory);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    setSubCategories(getSubCategories(category, type));
    setSubCategory('');
  }, [category, type]);

  useEffect(() => {
    if (onFilterChange) {
      onFilterChange({ category, subCategory });
    }
  }, [category, subCategory, onFilterChange]);

  const categoryOptions = Object.keys(ALL_CATEGORIES[type] || {});

  return (
    <div className="flex gap-2 items-center mb-4">
      <select
        className="px-2 py-1 rounded bg-[#181820] text-white border border-white/20"
        value={category}
        onChange={e => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categoryOptions.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <select
        className="px-2 py-1 rounded bg-[#181820] text-white border border-white/20"
        value={subCategory}
        onChange={e => setSubCategory(e.target.value)}
        disabled={!category}
      >
        <option value="">All Subcategories</option>
        {subCategories.map(sub => (
          <option key={sub} value={sub}>{sub}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
