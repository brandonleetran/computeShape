import Home from './components/Home'
import Shape from './components/Shape'
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shape" element={<Shape/>}/>
      </Routes>
    </div>
  );
}

export default App;
