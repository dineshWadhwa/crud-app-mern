
import './App.css';
import Home from './components/Home';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import Navbar from './components/Navbar';
import EditUser from './components/EditUser';


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={   <Home />} />
        <Route path="/add" element={   <AddUser />} />
        <Route path="/all" element={ <AllUser />} />
        <Route path="/edit/:id" element={ <EditUser />} />
         
       
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
