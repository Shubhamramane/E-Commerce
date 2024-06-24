import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Pages/Home/index';
import About from './Pages/About/index';
import Listing from './Pages/Listing';
import Footer from './Component/Footer/Footer';
import NotFound from './Pages/Not Found';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact={true} path='/' element={<Home/>}/>
          <Route exact={true} path='/listing' element={<Listing/>}/>
          <Route exact={true} path='*' element={<NotFound/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
