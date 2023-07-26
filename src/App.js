
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './Components/Main/Main'
import FilteredProducts from './Components/FilteredProducts/FilteredProducts'
function App() {
  return (
    <div className="App">

      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/filteredProducts/:type' element={<FilteredProducts />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
