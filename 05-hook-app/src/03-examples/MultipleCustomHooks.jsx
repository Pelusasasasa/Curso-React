
import {useCounter, useFetch} from '../hooks';
import { Loadingquote } from './Components/Loadingquote';

import { Quote } from './Components/Quote';

const url = 'https://api.breakingbadquotes.xyz/v1/quotes'

export const MultipleCustomHooks = () => {

    const {data,isLoading,hasError} = useFetch(url);
    const {counter,increment} = useCounter(1);
    const {quote,author} = !!data && data[0];

  return (
    <>
        <h1>BreakingBad Notes</h1>
        <hr />  

        {
            isLoading 
            ? ( <Loadingquote/> )
            : (
                <Quote author={author} quote={quote}/>
            )
        }

        <button disabled = {isLoading} className="btn btn-primary" onClick={() => increment()}>
            Next quote
        </button>

        

    </>
  )
}
