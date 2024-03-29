import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Nav from "./components/nav/Nav";
import CommingSoon from "./components/CommingSoon";
import Footer from "./components/footer/Footer";
import SingleBlog from "./pages/singleblog/SingleBlog";
import Author from "./pages/author/Author";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateBlog from "./pages/createBlog/CreateBlog";
import FormikLogin from "./pages/login/FormikLogin";
import FormikRegister from "./pages/login/FormikRegister";
import EditPostAuthor from "./pages/author/EditPostAuthor";

function App() {
  // catagory all tags here 
  const catagory = [
    { id: 1, cat: "Vs code" },
    { id: 6, cat: "React" },
    { id: 7, cat: "Css" },
    { id: 8, cat: "Tips" },
    { id: 9, cat: "Tailwindcss" },
    { id: 2, cat: "Technology" },
    { id: 3, cat: "Photograpy" },
    { id: 5, cat: "Javascript" },
  ];
  // const notify = () => toast.success("Wow so easy !");
  // const isChecked = useAuthChecked();

  return (
    <>
      <div className="scrollbar scroll-smooth scrollbar-corner-red ">
        <Nav catagory={catagory} />
        <div>
          <ToastContainer />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catagory" element={<CommingSoon />} />
          <Route path="/single/:id" element={<SingleBlog />} />
          {/* when profile to single blgo */}
          <Route path="profile/:id/single_blog/:id" element={<SingleBlog />} />
          <Route path="/profile/:id" element={<Author />} />
          <Route path="/login" element={<FormikLogin />} />
          <Route path="/register" element={<FormikRegister />} />
          <Route path="/createBlog" element={<CreateBlog />} />
          <Route
            path="/profile/:id/editBlog/:id"
            element={<EditPostAuthor />}
          />
          {/* TODO: */}
          {/* <Route path="*" element={<div className="h-[60vh] text-red text-3xl text-center">Not found....!!!</div>} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
