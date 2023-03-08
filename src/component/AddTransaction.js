import React, { useContext, useState } from 'react';
import { v4 } from 'uuid';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
	const [income, setIncome] = useState({ incomeText: '', incomeAmount: 0 });

	const { incomeText, incomeAmount } = income;

	const [expense, setExpense] = useState({ expenseText: '', expenseAmount: 0 });
	const { expenseText, expenseAmount } = expense;

	const { addIncome, addExpense } = useContext(GlobalContext);

	const onChangeIncome = e => {
		setIncome({ ...income, [e.target.name]: e.target.value });
	};

	const onChangeExpense = e => {
		setExpense({ ...expense, [e.target.name]: e.target.value });
	};

	const onSubmitIncome = e => {
		e.preventDefault();
		if (incomeText !== '') {
			const newIncomeTransaction = { id: v4(), incomeText, incomeAmount: incomeAmount * 1 };
			addIncome(newIncomeTransaction);
			income.incomeText.focus();
			setIncome({
				incomeText: '',
				incomeAmount: 0,
			});
		}
	};

	const onSubmitExpense = e => {
		e.preventDefault();

		if (expenseText !== '') {
			const newExpenseTransaction = { id: v4(), expenseText, expenseAmount: expenseAmount * 1 };
			addExpense(newExpenseTransaction);
			setExpense({
				expenseText: '',
				expenseAmount: 0,
			});
		}
	};

	return (
		<div className='form-wrapper'>
			<form onSubmit={onSubmitIncome}>
				<div className='input-group income'>
					<input
						type='text'
						name='incomeText'
						placeholder='Dodaj przychód'
						autoComplete='off'
						onChange={onChangeIncome}
						value={incomeText}
						autoFocus
					/>
					<input
						type='number'
						name='incomeAmount'
						placeholder='Kwota'
						autoComplete='off'
						onChange={onChangeIncome}
						value={incomeAmount}
					/>
					<input type='submit' value='Zatwierdź' />
				</div>
			</form>
			<form onSubmit={onSubmitExpense}>
				<div className='input-group expense'>
					<input
						type='text'
						name='expenseText'
						placeholder='Dodaj wydatek'
						autoComplete='off'
						onChange={onChangeExpense}
						value={expenseText}
					/>
					<input
						type='number'
						name='expenseAmount'
						placeholder='Kwota'
						autoComplete='off'
						onChange={onChangeExpense}
						value={expenseAmount}
					/>
					<input type='submit' value='Zatwierdź' />
				</div>
			</form>
		</div>
	);
};

export default AddTransaction;
