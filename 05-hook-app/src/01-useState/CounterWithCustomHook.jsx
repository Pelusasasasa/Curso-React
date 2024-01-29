import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const {counter,increment,decrement,reset} = useCounter();

  return (
    <>
        <h1>Counter WithHook: {counter}</h1>
        <hr />

        <button onClick={increment} className="btn btn-primary">+1</button>
        <button onClick={reset} className="btn btn-primary">reset</button>
        <button onClick={decrement} className="btn btn-primary">-1</button>
    </>
  )
}
