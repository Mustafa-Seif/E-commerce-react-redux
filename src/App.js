import './App.css';
import Home from '../src/components/Home'
import About from '../src/components/About'
import Products from '../src/components/Products'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import NoPage from '../src/components/NoPage'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ProjectsDetails from './components/projectDetails/ProjectsDetails';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';


function App() {
  return (
    < >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route  path='/about' element={<About />} />
          <Route  path='/products' element={<Products />} />
          <Route  path='/contact' element={<Contact />} />
          <Route  path="/products/:id" element={<ProjectsDetails />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
          <Route  path='*' element={<NoPage />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

