import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Nav from "./components/nav/Nav";
import CommingSoon from "./components/CommingSoon";
import Footer from "./components/footer/Footer";
import SingleBlog from "./pages/singleblog/SingleBlog";
import Author from "./pages/author/Author";
import Login from "./pages/login/Login";
import Sign_in from "./pages/login/Sign_in";
import { toast, ToastContainer } from "react-toastify";


function App() {
  const catagory = [
    { id: 1, cat: 'Vs code' },
    { id: 6, cat: 'React' },
    { id: 7, cat: 'Css' },
    { id: 8, cat: 'Tips' },
    { id: 9, cat: 'Tailwindcss' },
    { id: 2, cat: 'Technology' },
    { id: 3, cat: 'Photograpy' },
    { id: 5, cat: 'Javascript' },
  ]

  const notify = () => toast.success("Wow so easy !");
  
  return (
    <div className="scrollbar scroll-smooth scrollbar-corner-red ">
      <Nav catagory={catagory} />
      <div>
        <button onClick={notify}></button>
        <ToastContainer />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catagory" element={<CommingSoon />} />
        <Route path="/single/:id" element={<SingleBlog />} />
        <Route path="/author" element={<Author />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Sign_in />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;