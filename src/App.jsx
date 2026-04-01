import { useState } from "react";
import Navbar from "./component/navbar";
import "@fontsource/manrope";
import "./index.css";



function App() {
  const [tab, setTab] = useState("model");

  return (
    <>
      <Navbar />
    </>

  )
}

export default App