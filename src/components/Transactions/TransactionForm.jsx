import { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState'
import { Validation } from '../Validaciones/Validation'
export const TransactionForm = () => {

  const [description, setDescription] = useState({name: ""})
  const [error, setError] = useState({name: ""})

  const [amount, setAmount] = useState(0)
  const { addTransaction, transactions  } = useGlobalState()

  const handleChange = (event) => {
    const { value } = event.target
    setDescription({ name: value })
    setError(Validation({ name: value }))
  }

  const security = transactions.filter((ele) => ele > 0).reduce((acc, ele) => (acc += ele), 0)


  const hanldeSubmit = (event) => {
    event.preventDefault()
    addTransaction({
      id: window.crypto.randomUUID(),
      description: description.name,
      amount: Number(amount)
    })
    setAmount(0)
    setDescription({name: ""})
  }




  return (
    <div className='pt-10 w-full flex flex-col align-bottom'>
      <form onSubmit={hanldeSubmit}>
        <input className='bg-zinc-500 text-white px-2 py-3 rounded-lg block mb-2 w-full font-semibold' type='text' value={description.name} onChange={handleChange} placeholder='Ingrese una descripcion'/>
        {error.name ? <span className='text-red-500 font-bold mt-2 mb-2'>{error.name}</span> : null}
        <input className='bg-zinc-500 text-white px-2 py-3 rounded-lg block mb-2 w-full font-semibold' type="number" step="0.01" value={amount} onChange={(event)=> setAmount(event.target.value) } placeholder='Ingrese un monto'/>
        <button className='px-3 py-2 bg-indigo-700 rounded-lg'  type='submit'>añade una transaccion</button>
      </form>
        
    </div>
  )
}

