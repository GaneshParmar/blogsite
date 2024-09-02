import { useDispatch, useSelector } from "react-redux";
import Button from "../hoc/Button";
import Heading from "../hoc/Heading";
import Blog from "./Blog";
import BlogHero from "./blogcards/BlogHero";
import SmallCard from "./blogcards/SmallCard";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { clearBlogs } from "../features/blogs/blogsReducer";
function BlogPage() {
  const navigate = useNavigate();
  const blogs = useSelector((state) => state.blogs.blogs);

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const [blogsToDisplay, setBlogsToDisplay] = useState(blogs);
  const blogsPerPage = 3;

  useEffect(() => {
    const startIndex = currentPage * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    // Reverse the blogs array to show the newest blogs first
    const reversedBlogs = [...blogs].reverse();
    const blogSliced = reversedBlogs.slice(startIndex, endIndex);
    console.log(blogSliced);
    console.log(reversedBlogs);
    setBlogsToDisplay(blogSliced);
  }, [currentPage, blogs]);
  // Handle Older button click
  const handleOlderClick = () => {
    if (currentPage < Math.ceil(blogs.length / blogsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle Newer button click
  const handleNewerClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClearBlogs = () =>{
    dispatch(clearBlogs([]));
  }
  const blogHero = {
    title: "Title of a longer featured blog post",
    excerpt:
      "Multiple lines of text form the lede, informing new readers quickly and efficiently about what's most intresting in this post content.",
  };

  const featuredBlogCards = [
    {
      title: "Featured post",
      date: "Nov 12",
    },
    {
      tag: "Design",
      title: "Post title",
      date: "Nov 11",
      excerpt: null,
    },
  ];

  return (
    <div className="w-100 max-w-5xl mx-auto ">
      <NavBar />
      <BlogHero blog={blogHero} />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 w-100 mx-auto p-2">
        {featuredBlogCards.map((card) => (
          <SmallCard blog={card} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-8 p-2 relative">
          {/* <h3 className="text-2xl font-serif italic border-b mb-3 pb-3">
                From the firehorse
            </h3> */}
          <Heading>From the firehorse</Heading>
          <div className="flex flex-col">
            {blogsToDisplay.length > 0
              ? blogsToDisplay.map((blog) => <Blog blog={blog} />)
              : "No blogs present create them"}
          </div>

          <div className="flex gap-2 my-5">
            <button
              className="rounded-3xl border text-sm py-1 px-4 bg-blue-100 text-blue-500 border-blue-300"
              onClick={handleOlderClick}
            >
              Older
            </button>
            <button
              className="rounded-3xl border text-sm py-1 px-4 "
              onClick={handleNewerClick}
            >
              Newer
            </button>
            <button
              className="rounded-3xl border text-sm py-1 px-4 "
              onClick={handleClearBlogs}
            >
              Clear all blogs
            </button>
            
          </div>
        </div>
        <div className="md:col-span-4 p-2">
          <div className="bg-slate-100 rounded flex items-center justify-center py-4 my-2 w-100 max-w-xs mx-auto my-10">
            <div className="text-center flex flex-col gap-4">
              <h1>Create a new blog</h1>
              <Button
                onClick={() => {
                  navigate("/");
                }}
              >
                Create
              </Button>
            </div>
          </div>
          <div className="bg-slate-200 rounded p-4">
            <Heading className={"border-none pb-0 mb-1"}>About</Heading>
            <p>
              We provide daily blogs what happening around the world and also
              importantly in the technlogies what new have came and what has
              been decrypted.
            </p>
          </div>

          <div className=" p-4">
            <Heading className={"border-none pb-0 mb-0"}>Archives</Heading>
            <div className="flex flex-col">
              <a className="text-blue-700">Nov 21</a>
              <a className="text-blue-700">Dec 21</a>
              <a className="text-blue-700">Feb 2</a>
              <a className="text-blue-700">Jan 21</a>
              <a className="text-blue-700">Nov 20</a>
            </div>
          </div>
          <div className=" p-4">
            <Heading className={"border-none pb-0 mb-0 p-0 m-0"}>
              Elsewhere
            </Heading>
            <div className="flex flex-col">
              <a className="text-blue-700">Github</a>
              <a className="text-blue-700">Twitter</a>
              <a className="text-blue-700">Facebook</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogPage;
