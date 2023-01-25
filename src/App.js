import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Nav from "./components/nav/Nav";
import CommingSoon from "./components/CommingSoon";

function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catagory" element={<CommingSoon />} />
      </Routes>
    </div>
  );
}


export default App;


{/* <ul>
  <li><b>CSS:</b>
    <li>Tailwindcss</li>
    <li>Metrial UI</li>
  </li>
  <li><b>extranal</b>
    <li>react-router-dom</li>
    <li> </li>
  </li>

</ul>  */}