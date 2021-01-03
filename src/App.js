import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Cart from './components/Cart'

function App() {
  return (
    <div className="app">
      <Routes>
      <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
       <Route 
           path="checkout"
           element={
             <>
               <Header />
                <Cart />

            </>
           }
       />

    
        <Header />
        <Home />
      </Routes>
    </div>
  );
}

export default App;
