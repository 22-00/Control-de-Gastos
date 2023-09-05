import { VictoryPie, VictoryLabel  } from 'victory';
import { useGlobalState } from '../context/GlobalState';

export const ExpenseChart =() =>  {

  const { transactions } = useGlobalState()

  const totalIngresos = transactions.filter((ele) => ele.amount > 0)
  .reduce((acc, transacciones) => (acc += transacciones.amount), 0)

  const validate = transactions.filter((ele) => ele.amount < 0)

  const totalGastos = transactions.filter((ele) => ele.amount < 0)
  .reduce((acc, transacciones) => (acc += transacciones.amount), 0) * -1;


  const porcentajeGastos = validate.length === 0? 0 : Math.round((totalGastos / totalIngresos ) * 100)
  const porcentajeIngreso = 100 - porcentajeGastos

  return (
    <div className='z-30'>
    <VictoryPie
    colorScale={["#2ecc71", "#e74c3c"]}
    data={[
        { x: "Ingresos", y: porcentajeIngreso},
        { x: "Gastos", y: porcentajeGastos },
      ]}
      animate={{
        duration: 400
    }}
      labelComponent={<VictoryLabel
        angle={20}
        style={{fill : "white"}}
      />}
    />
    </div>
  )
}
