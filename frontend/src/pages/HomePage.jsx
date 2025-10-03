import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import BalanceCard from "../components/BalanceCard.jsx";
import AnimatedList from "../components/AnimatedList.jsx";
import axiosUtil from "../services/axios.js";
import getUserIdFromToken from "../services/jwt_utils";
import AddTransactionModal from "../components/AddTransactionModal.jsx";

const HomePage = () => {
  const [accountData, setAccountData] = useState({ entries: [], balance: 0, incomes: 0, expenses: 0 });
  const [modalOpen, setModalOpen] = useState(false);
  const fetchEntries = async () => {
      try {
        const res = await axiosUtil.entry.get(`?userId=${getUserIdFromToken()}`);
        console.log(res);
        setAccountData(res.data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to load products");
      }
    };
  useEffect(() => {

    fetchEntries();
  }, []);

  return (
    <div>

      <BalanceCard
        balance={accountData.balance}
        incomes={accountData.incomes}
        expenses={accountData.expenses}
      />
      <div className="flex justify-center mt-4" style={{ position: "relative", zIndex: 20 }}>
        <button
          onClick={() => setModalOpen(true)}
          className="px-5 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-500 transition"
          style={{ position: "relative", zIndex: 30 }}
        >
          + Add Transaction
        </button>
      </div>
      <AnimatedList
        items={accountData.entries}
        showGradients={true}
        enableArrowNavigation={true}
        displayScrollbar={false}
      />
      <AddTransactionModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={fetchEntries}
      />
    </div>
  );
};

export default HomePage;