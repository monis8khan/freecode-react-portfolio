import './App.scss';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
