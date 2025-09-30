export async function getBalance(data) {
    let totalExpenses = 0;
    let totalIncomes = 0;
    data.entries.forEach(entry => {
        if (entry.type === "expense") {
            totalExpenses += entry.amount;
        } else if (entry.type === "income") {
            totalIncomes += entry.amount;
        }
    });

    totalExpenses = Number(totalExpenses.toFixed(2));
    totalIncomes = Number(totalIncomes.toFixed(2));
    let totalBalance = Number(totalIncomes - totalExpenses).toFixed(2);


    return {totalBalance, totalExpenses, totalIncomes};
}

export default {getBalance};