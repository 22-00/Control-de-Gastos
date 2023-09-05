
import { useGlobalState } from '../context/GlobalState'

export const Balance = () => {

    const { transactions } = useGlobalState()

    const montos = transactions.map((trans) => trans.amount)

    const total = montos.reduce((acc, item) => ( acc + item ), 0).toFixed(2)

  return (
    <div className='flex flex-row justify-between bg-zinc-500 text-white px-3 py-1 rounded-lg mb-2 w-full items-center'>
        <h2 className='font-semibold'>Balance: </h2>
        <h4 className='font-semibold'>$ {total}</h4>
    </div>
  )
}
