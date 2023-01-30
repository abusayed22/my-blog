import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Nav from "./components/nav/Nav";
import CommingSoon from "./components/CommingSoon";
import ModalNav from "./components/modalComponents/ModalNav";
import { useState } from "react";
import Footer from "./components/footer/Footer";
import SingleBlog from "./pages/singleblog/SingleBlog";
import Author from "./pages/author/Author";


function App() {
  const catagory = [
    { id: 1, cat: 'catagory' },
    { id: 2, cat: 'catagory' },
    { id: 3, cat: 'catagory' },
    { id: 4, cat: 'catagory' },
    { id: 5, cat: 'catagory' },
  ]

  

  return (
    <>
      <Nav catagory={catagory}  />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catagory" element={<CommingSoon />} />
        <Route path="/single" element={<SingleBlog />} />
        <Route path="/author" element={<Author />} />
      </Routes>
      
      <Footer />
    </>
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