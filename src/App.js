import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Nav from "./components/nav/Nav";
import CommingSoon from "./components/CommingSoon";
import Footer from "./components/footer/Footer";
import SingleBlog from "./pages/singleblog/SingleBlog";
import Author from "./pages/author/Author";
import Login from "./pages/login/Login";
import Sign_in from "./pages/login/Sign_in";


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
      <Nav catagory={catagory} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catagory" element={<CommingSoon />} />
        <Route path="/single/:id" element={<SingleBlog />} />
        <Route path="/author" element={<Author />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign_in" element={<Sign_in />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;