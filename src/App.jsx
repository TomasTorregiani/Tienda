import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import ItemListContainer from './Components/itemListContainer'
import ItemDetailsContainer from './Components/itemDetailsContainer'
import ErrorRoute from './Components/errorRoute';
import NavBar from './Components/navBar';
import CartWidgetDetail from './Components/cartWidgetDetail';
import { CartProvider } from './Context/CartContext';

function App() {

  return (

    <CartProvider>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailsContainer/>}/>
          <Route path='/cartDetail' element={<CartWidgetDetail/>} />
          <Route path='*' element={<ErrorRoute/>} />
          </Routes>
      </BrowserRouter>
    </CartProvider>
    
    
  )
}

export default App;
