import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import IncomeTransactions from './IncomeTransactions';

const IncomeList = () => {
	const { incomeTransactions } = useContext(GlobalContext);
	return (
		<div className='transactions transactions-income'>
			<h2>Historia przychodów</h2>
			<ul className='transaction-list'>
				{incomeTransactions.map(incomeTransaction => (
					<IncomeTransactions key={incomeTransaction.id} incomeTransaction={incomeTransaction} />
				))}
			</ul>
		</div>
	);
};

export default IncomeList;
