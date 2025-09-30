import { useState, useEffect } from "react";
import BalanceCard from "../components/BalanceCard.jsx";
import AnimatedList from "../components/AnimatedList.jsx";
import toast from "react-hot-toast";
import axiosUtil from "../services/axios.js";
import getUserIdFromToken from "../services/jwt_utils";
const HomePage = () => {
  const [accountData, setAccountData] = useState({ entries: [], balance: 0, incomes: 0, expenses: 0 });
  useEffect(() => {
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
    fetchEntries();
  }, []);

  return (
    <div>
      <BalanceCard
        balance={accountData.balance}
        incomes={accountData.incomes}
        expenses={accountData.expenses}
      />
      <AnimatedList
        items={accountData.entries}
        showGradients={true}
        enableArrowNavigation={true}
        displayScrollbar={false}
      />
    </div>
  );
};

export default HomePage;