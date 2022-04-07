import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Search from './components/Search'
import Company from './components/Company'
import Favorites from './components/Favorites'
import store from './redux/store'
import {Provider} from 'react-redux'


function App() {
  return (
    <div className="App">
      <Provider store={store}>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search/>} />
        <Route path='/:company' element={<Company/>}/>
        <Route path='/favorites' element={<Favorites/>} />
      </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
