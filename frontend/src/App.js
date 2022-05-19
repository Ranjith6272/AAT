
import React from 'react';
import {Route,Routes,BrowserRouter}  from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
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
         </Routes>
         </Container>
       </main>
       <Footer/>
    </BrowserRouter>
  )
}

export default App;
