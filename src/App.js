import AppRoutes from './Routes'
import './App.css';
import Dashboard from './components/Home';
import { ProductProvider } from './ProductContext';


function App() {
  return (
    <div className="App">

<ProductProvider>
    <AppRoutes/>
</ProductProvider>

  
    </div>
  );
}

export default App;
