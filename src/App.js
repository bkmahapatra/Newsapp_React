import { useState } from "react";
import Navbar from "./components/Navbar";
import RootApp from "./RootApp";

function App() {
  const [country, setCountry] = useState("in");

  return (
    <>
      <Navbar />
      <RootApp />
    </>
  );
}
export default App;
