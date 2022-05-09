import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

function App() {
  const [cartValue, setCartValue] = useState(0);

  return (
    <>
      <Navbar cartValue={cartValue} />
      <Dashboard cartValue={cartValue} setCartValue={setCartValue} />
      <Footer />
    </>
  );
}

export default App;
