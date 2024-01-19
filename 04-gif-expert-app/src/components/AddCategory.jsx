import {useState} from 'react';
const apikey = '2pn5YpKp47DQywZy4NpidWL0sg9Yq4IB';

export const AddCategory = ({onNewCategory,resetCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onSubmit = (event) => {

        const newValue = inputValue.trim();

        event.preventDefault();
        if (newValue.length <= 1) return;
        
        onNewCategory(newValue);
        setInputValue('');
    }

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onReset = () => {
        resetCategory();
    }

  return (
    <div className='form'>
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value = {inputValue}
                onChange = { onInputChange }
            />
        </form>

        <button onClick={onReset}>Reset</button>
    </div>
  )
};