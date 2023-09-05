import { useGlobalState } from "../../context/GlobalState"

export const TransactionItem = ({ transaccion }) => {

    const {  deleteTransaction } = useGlobalState()

  return (
    <li className='bg-zinc-500 text-white px-3 py-1 rounded-lg mb-2 w-full flex gap-2 items-center' >
    <h4 className=" font-semibold">{transaccion.description}</h4>
    <div>
    <span className=" font-semibold">${transaccion.amount}</span>
    <button
     className='bg-indigo-700 hover:bg-red-600 transition ease-in-out delay-200 rounded-lg px-1 ml-2'
     onClick={() => deleteTransaction(transaccion.id)}
     >
        X
     </button></div>
  </li>
  )
}
