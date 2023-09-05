import { useGlobalState } from '../../context/GlobalState'
import { TransactionItem } from './TransactionItem'
export const TransactionList = () => {
  const { transactions } = useGlobalState()
  return (
    <>
      <h1 className='font-bold text-2xl text-center pb-5'>Historial</h1>
        <ul>
       {
        transactions.map((transaccion) => (
          <TransactionItem transaccion={transaccion} key={transaccion.id}/> 
        ))
       }
        </ul>
    </>
  )
}
