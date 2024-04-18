import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { TodoApp } from './08-useReducer/TodoApp'
// import { HooksApp } from './HooksApp'
// import { SimpleForm } from './useEffect/SimpleForm'
// import { FormWithCustomHook } from './useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { CounterApp } from './01-useState/CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Padre />, */}
    <TodoApp/>
  </React.StrictMode>,
  
)
