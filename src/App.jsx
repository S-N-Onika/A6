import { useState } from "react";
import Navbar from "./component/navbar";
import "@fontsource/manrope";
import "./index.css";
import Banner from "./component/banner";



function App() {
  const [tab, setTab] = useState("model");

  return (
    <>
      <Navbar />
      <Banner/>
    </>

  )
}

export default App;