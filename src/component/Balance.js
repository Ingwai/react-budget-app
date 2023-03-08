import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
	const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);
	const incomeAmounts = incomeTransactions
		.map(incomeTransaction => incomeTransaction.incomeAmount)
		.reduce((sum, incomeTransaction) => (sum += incomeTransaction), 0)
		.toFixed(2);

	const expenseAmounts = expenseTransactions
		.map(expenseTransaction => expenseTransaction.expenseAmount)
		.reduce((sum, expenseTransaction) => (sum += expenseTransaction), 0)
		.toFixed(2);

	const totalAmount = incomeAmounts - expenseAmounts;

	return (
		<div className='balance'>
			<h2>Twoje saldo</h2>
			<h3> {totalAmount} PLN</h3>
			<div className='income-expense'>
				<div className='plus'>
					<h3>Przychód</h3>
					<p>+ {incomeAmounts} PLN</p>
				</div>
				<div className='minus'>
					<h3>Wydatki</h3>
					<p>– {expenseAmounts} PLN</p>
				</div>
			</div>
		</div>
	);
};

export default Balance;
