import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { HooksApp } from './HooksApp'
// import { SimpleForm } from './useEffect/SimpleForm'
// import { FormWithCustomHook } from './useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
import { MemoHook } from './06-memos/MemoHook'
import { CallbackHook } from './06-memos/CallbackHook'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { CounterApp } from './01-useState/CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CallbackHook />
    {/* <MemoHook/> */}
    {/* <Memorize /> */}
    {/* <Layout /> */}
    {/* <FocusScreen/> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FormWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <CounterWithCustomHook/> */}
    {/* <HooksApp /> */}
    {/* <CounterApp value={0}/> */}
    
  </React.StrictMode>,
)
