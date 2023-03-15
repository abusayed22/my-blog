// "id": 1,
// "name": "Learn With Sumit",
// "Email": "lws@gmail.com",
// "professional": "Software Eng.",
// "proTitle": "A passionate Teacher",
// "date": "May 10, 2022",
// "duration": "10:12",
// "views": "2.3k",
// "tags": [
//     "js",
//     "javascript"
// ],
// "like": [
//     "rahim",
//     "karim"
// ],
// "comments": [
//     {
//         "id":1,
//         "com": "your words touch my heart",
//         "date": "April 25, 2022"
//     }

import BlogForm from "../../components/create blog/BlogForm";


function CreateBlog() {



  return (
    <div className="w-screen h-[100vh] p-1 bg-[#6D8C00]">
      <div className="w-[70%] md:w-[50%] lg:w-[40%] bg-[#bdd986a1] rounded-lg mx-auto h-auto">
        <BlogForm />
      </div>
    </div>
  );
}
export default CreateBlog;
