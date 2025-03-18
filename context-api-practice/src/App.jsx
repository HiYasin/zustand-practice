
import './App.css'
import Grandpa from './components/Grandpa'
import CounterProvider from './context/CounterProvider'

function App() {
  return (
    <>
      <CounterProvider>
        <Grandpa />
      </CounterProvider>
    </>
  )
}

export default App
