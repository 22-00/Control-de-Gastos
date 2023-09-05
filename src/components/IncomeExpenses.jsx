import { useGlobalState } from '../context/GlobalState'

export const IncomeExpenses = () => {

    const { transactions } = useGlobalState()

    const transacciones = transactions.map((ele) => ele.amount)

    const ingresos = transacciones.filter((ele) => ele > 0).reduce((acc, item) => (acc+= item), 0)

    const gastos = transacciones.filter((ele)=> ele < 0 ).reduce((acc,item )=> (acc += item), 0 ) * -1

  return (
    <>
    <div className='flex flex-row justify-between bg-zinc-500 text-white px-3 py-1 rounded-lg mb-2 w-full items-center'>
        <h2 className='font-semibold'>Ingresos: </h2>
        <h4 className='font-semibold'>$ {ingresos}</h4>
    </div>
    <div className='flex flex-row justify-between bg-zinc-500 text-white px-3 py-1 rounded-lg mb-2 w-full items-center'>
        <h2 className='font-semibold'>Gastos: </h2>
        <h4 className='font-semibold'>$ {gastos}</h4>
    </div>
    </>
  )
}
