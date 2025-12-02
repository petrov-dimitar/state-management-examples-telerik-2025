import './App.css'
import InventoryStart from './components/inventory-start';
import InventoryUseReducer from './components/inventory-useReducer';
import Requirements from './components/requirements';

function App() {
  return (
    <>
      <Requirements/>
      {/* <InventoryStart/> */}
      <InventoryUseReducer/>
    </>
  )
}

export default App
