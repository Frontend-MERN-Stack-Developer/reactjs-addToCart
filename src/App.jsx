import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import ContactUS from './pages/contactus/ContactUS'
import Cart from './pages/cart/Cart'
// import fruitList from'./data'
// import { useEffect, useState } from 'react'

const App = () => {

  // const [productId, setProudctId] = useState("")
  // const [cartAllProduct, setCartAllProduct] = useState([]);

  // useEffect(() => {
  //   const filterObject = fruitList.filter((product) => (
  //     product.id == productId
  //   ))
  //   setProudctId([...productId, ...filterObject])
  // }, [productId])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactus' element={<ContactUS />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
