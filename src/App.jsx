import Navbar from "./component/navbar";
import "@fontsource/manrope";
import "./index.css";
import Banner from "./component/banner";
import Products from "./component/Products";

const getApi = async () => {
  const res = await fetch("/Api.json")
  return res.json();
}

const apiData = getApi();


function App() {

  return (
    <>
      <Navbar />
      <Banner/>
      <Products apiData={apiData}/>
    </>

  )
}

export default App;

