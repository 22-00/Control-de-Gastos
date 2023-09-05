import './App.css'
import { Balance } from './components/Balance'
import { ExpenseChart } from './components/ExpenseChart'
import { Header } from './components/Header'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionForm } from './components/Transactions/TransactionForm'
import { TransactionList } from './components/Transactions/TransactionList'
import { GlobalProvider } from './context/GlobalState'

function App() {

  return (
      <GlobalProvider>
        <div className='bg-zinc-800 text-white h-screen flex justify-center items-center'>
          <div className='container mx-auto w-4/5 bg-zinc-600 p-10 rounded-lg flex flex-row justify-evenly'>
            <div className='flex flex-col align-'>
              <Header />
              <IncomeExpenses />
              <Balance />
            <div>
              <TransactionForm />
            </div>
            </div>
            <div className='ml-5'>
              <TransactionList/>
            </div>
            <div>
            <ExpenseChart/>
            </div>
          </div>
        </div>
      </GlobalProvider>
  )
}

export default App
