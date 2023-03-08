import './App.css';
import AddTransaction from './component/AddTransaction';
import Balance from './component/Balance';
import Header from './component/Header';
import IncomeList from './component/IncomeList';
import ExpenseList from './component/ExpenseList';
import GlobalContextProvider from './context/GlobalState';

function App() {
	return (
		<GlobalContextProvider>
			<div className='container'>
				<div className='app-wrapper'>
					<Header />
					<Balance />
					<AddTransaction />
					<IncomeList />
					<ExpenseList />
				</div>
			</div>
		</GlobalContextProvider>
	);
}

export default App;
