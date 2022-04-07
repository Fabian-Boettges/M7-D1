import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Search from './components/Search'
import Company from './components/Company'


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search/>} />
        <Route path='/:company' element={<Company/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
