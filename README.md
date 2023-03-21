
# my-blog


# live: https//



## 🚀 Project Description:


This app is for blogs. Create, delete and edit blogs by your own credentials.
The project will create blogs, edit own blogs, delete own blogs and show every blogs together.Edit,delete,create,like ,unlike,comments etc operation by user authentication. Comments can be edited and deleted with user authentication.Data management by redux-thunk.


# Technologies:
## css : 
### 1.Tailwindcss  2.Material UI

## State Management - Redux
## Routing - React Router
## To handle api’s which return Promises - Redux-Thunk
## Making Api calls - axios, fetch
## For creating simple Forms - Formik with yup
## FontFamily:
### 1.sans: ['Graphik', 'sans-serif']  2.serif: ['Merriweather', 'serif']

# Some of the challenges:
### immer installed but is not used, because immer for one dimensional array's immuted operation.Root data fetching is allBlogs feature. So this feature's  state very nested. So this not for immer . Already i know that, but i learned more about this.

### react-reveal a bug lossed half-day, the bug was of react-reveal. react-reveal published was 5 years old. so maybe react-reveal isn't for this time.


## installed
```bash
git clone {https://github.com/abusayed22/my-blog.git}
npm install
npm start 
```

# How to Use the Project:
#### View all blogs by home page and by pagination.
#### If you want to post blog, there is a button and click the button. Then fill in your information if you are already logged in and input the form. And link the image as cover image. Post it

#### If you click on the view button, you will be taken to the details of the blog and there you can like comment and if you have any comment then you can edit it. Delete your own comment.
#### Click on author and it will show you all the blogs of that author. If your profile is then all blogs will show and if you hover a single blog you will get the option to edit and delete.
















<!-- <ul>
  <li><b>CSS:</b>
    <ul>
         <li>Tailwindcss</li>
        <li>Material UI</li>
    </ul>
  </li>
  <li><b>FontFamily:</b>
    <ul>
         <li>sans: ['Graphik', 'sans-serif']</li>
        <li> serif: ['Merriweather', 'serif']</li>
    </ul>
  </li>
  <li><b>extranal</b>
    <li>react-router-dom</li>
    <li>immer implement for mutetedly state update in allBlogsReducer. But is not for my reducer opparation, because <b>Immer only supports setting array indices and the 'length' property
</b> </li>
    <li> npm install --save-dev tailwind-scrollbar</li>
    <li> Formik & yup install for form handle</li>
    <li> </li>
  </li>
  
  animation: react-reveal
  a bug lossed half-day, the bug was of react-reveal. react-reveal published was 5 years old. so maybe react-reveal isn't for this time.

</ul>

<hr />
<ol>
<b>Ulitls:</b>
 <li>Pagination</li>
</ol>

<b>react-dropzone use for image uploading</b>



bugs
1= pagination right arrow
2= gatagory section
3= todo scrollbar implement


deploy url: 
auth: https://auth-server-49u7.onrender.com/api/auth -->
