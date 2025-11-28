import './App.css'
import InventoryStart from './components/inventory-start';
import InventoryRefactored from './components/inventory-refactored';
import Requirements from './components/requirements';

function App() {
  return (
    <>
      <Requirements/>
      <InventoryStart/>
      <InventoryRefactored/>
    </>
  )
}

export default App
