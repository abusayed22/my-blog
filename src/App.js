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
    { id: 1, cat: 'Vs code' },
    { id: 1, cat: 'React' },
    { id: 1, cat: 'Css' },
    { id: 1, cat: 'Tips' },
    { id: 1, cat: 'Tailwindcss' },
    { id: 2, cat: 'Technology' },
    { id: 3, cat: 'Photograpy' },
    { id: 4, cat: 'Writer' },
    { id: 5, cat: 'Javascript' },
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