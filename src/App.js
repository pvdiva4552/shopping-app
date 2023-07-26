
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './Components/Main/Main'
import FilteredProducts from './Components/FilteredProducts/FilteredProducts'
import SingleProduct from './Components/SingleProduct/SingleProduct';
function App() {
  return (
    <div className="App">

      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/filteredProducts/:type' element={<FilteredProducts />}></Route>
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct />}
          ></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
