import { useState } from "react";
import { BlogForm } from "./components/BlogForm";
import { useDispatch, useSelector } from 'react-redux';
import { addBlog } from "./features/blogs/blogsReducer";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();


  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);

  const BlogFormSubmit = (e,{ setSubmitting , resetForm}) =>{
    let blogData = e;
    blogData.date = new Date().toUTCString();
    dispatch(addBlog(blogData));
    setSubmitting(false);
    resetForm();
    navigate('/blogs');
  }

  return (
    <>
      <div className="h-screen flex  justify-center w-screen">
        <div className="w-full h-100 flex flex-col md:w-8/12">
          <BlogForm onSubmit={BlogFormSubmit}/>
        </div>
      </div>
    </>
  )
}
