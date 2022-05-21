
import React from 'react';
import {Route,Routes,BrowserRouter}  from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Placeorder from './screens/Placeorder';
import Useradmin from './admin/Useradmin';
import Userdetails from './admin/Userdetails';
import Cart from './screens/Cart';
const App = () => {
  return (
    <BrowserRouter>
       <Header/>
       <main className='py-3'>
         <Container>  
         <Routes>
          <Route path="/" element={<HomeScreen/>} exact/>
          <Route path="/product/:id" element={<ProductScreen/>} exact/>
          <Route path="/login" element={<Signin/>} exact/>
          <Route path="/register" element={<Signup/>} exact/>
          <Route path="/placeorder" element={<Placeorder/>} exact/>
          <Route path="/useradmin" element={<Useradmin/>} exact/>
          <Route path="/userdetails" element={<Userdetails/>} exact/>
          <Route path="/cart" element={<Cart/>} exact/>
         </Routes>
         </Container>
       </main>
       <Footer/>
    </BrowserRouter>
  )
}

export default App;
