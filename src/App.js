import logo from './logo.svg';
import './App.css';
import FirstPage from './component/FirstPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NextPage from './component/NextPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage/>}></Route>
        <Route path='nextpage' element={<NextPage/>}></Route>
      </Routes>
      </BrowserRouter>
    {/* <FirstPage/> */}
    </div>
  );
}

export default App;
