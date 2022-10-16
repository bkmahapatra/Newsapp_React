import { useState } from "react";

import RootApp from "./RootApp";

function App() {
  const [country, setCountry] = useState("in");

  return (
    <>
      <RootApp />
    </>
  );
}
export default App;
