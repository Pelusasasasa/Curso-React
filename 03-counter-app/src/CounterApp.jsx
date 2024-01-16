import PropTypes from 'prop-types';
import { useState } from 'react';
 
export const CounterApp = ({value}) => {
    
    const [count,setCount] = useState(value);

    const handleAdd = (e) => {
        setCount(count + 1);
    }

    const handleSubstract = (e) => {
        setCount(count - 1);
    }

    const handleReset = (e) => {
        setCount(value);
    };

  return (
    <>
        <h1> Counter App </h1>
        <h2> {count} </h2>
        <button onClick={handleAdd}> +1 </button>
        <button onClick={handleSubstract}> -1 </button>
        <button aria-label='btn-reset' onClick={handleReset}> Reset </button>
    </>
  )
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};