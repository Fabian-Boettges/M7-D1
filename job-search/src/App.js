import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Search from './components/Search'


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search/>} />
        <Route/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
