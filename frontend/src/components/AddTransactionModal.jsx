import React, { useState, useEffect } from "react";
import axiosUtil from "../services/axios.js";
import getUserIdFromToken from "../services/jwt_utils";
import ALL_CATEGORIES from "../../../backend/src/utils/categories.js";

const defaultCategories = Object.keys(ALL_CATEGORIES.expense);

const AddTransactionModal = ({ open, onClose, onSuccess }) => {
  const [type, setType] = useState("expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState(defaultCategories);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    setCategories(Object.keys(ALL_CATEGORIES[type]));
    setCategory("");
    setSubCategory("");
    setSubCategories([]);
  }, [type]);

  useEffect(() => {
    if (category) {
      setSubCategories(ALL_CATEGORIES[type][category] || []);
      setSubCategory("");
    }
  }, [category, type]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosUtil.entry.post("/insert", {
        userId: getUserIdFromToken(),
        type,
        category,
        subCategory,
        amount: Number(amount),
        description,
      });
      onSuccess && onSuccess();
      onClose();
    } catch (err) {
      alert("Failed to add transaction.");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-[#181820] rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-lg font-semibold mb-4 text-gray-200">Add Transaction</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-1">Amount</label>
            <input
              type="number"
              required
              value={amount}
              onChange={e => setAmount(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-900 text-gray-100 border border-gray-700"
              min="0"
              step="0.01"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Type</label>
            <select
              value={type}
              onChange={e => setType(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-900 text-gray-100 border border-gray-700"
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Category</label>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-900 text-gray-100 border border-gray-700"
              required
            >
              <option value="">Select Category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Subcategory</label>
            <select
              value={subCategory}
              onChange={e => setSubCategory(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-900 text-gray-100 border border-gray-700"
              required
              disabled={!category}
            >
              <option value="">Select Subcategory</option>
              {subCategories.map(sub => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Description</label>
            <input
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-900 text-gray-100 border border-gray-700"
              placeholder="Optional"
            />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-700 text-gray-300 hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-500"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionModal;