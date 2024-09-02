import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import BlogCard from "./BlogCard"; // Import the BlogCard component

const BlogForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    content: Yup.string().required("Content is required"),
  });

  const dummyBlogs = [
    {
      title: "The Art of Coding",
      author: "Jane Doe",
      email: "jane.doe@example.com",
      content: `
        <p><strong>Coding</strong> is an art, and like all arts, it requires creativity, skill, and practice. 
        To become a master coder, one must not only understand the syntax and semantics of a language but also 
        develop an intuition for solving complex problems. Coding is more than just writing lines of code; 
        it’s about creating elegant, efficient solutions that are both functional and maintainable. 
        Whether you are designing a simple webpage or developing a sophisticated application, 
        the artistry in coding lies in your ability to craft solutions that are both innovative and robust. 
        It's an ever-evolving field that challenges you to continuously improve and adapt, 
        making it as dynamic and exciting as any traditional form of art.</p>
      `,
    },
    {
      title: "Understanding React",
      author: "John Smith",
      email: "john.smith@example.com",
      content: `
        <p><em>React</em> is a powerful JavaScript library for building user interfaces. 
        It allows developers to create reusable UI components that manage their own state, 
        making it easier to build complex, dynamic web applications. One of the key concepts in React 
        is the virtual DOM, which optimizes rendering by updating only the parts of the DOM that need to change. 
        This approach not only enhances performance but also simplifies the development process. 
        React's component-based architecture encourages the separation of concerns, enabling developers 
        to build modular and maintainable code. With its rich ecosystem, including tools like React Router 
        and Redux, React provides everything you need to build scalable, high-performance applications.</p>
      `,
    },
    {
      title: "Mastering JavaScript",
      author: "Alice Johnson",
      email: "alice.johnson@example.com",
      content: `
        <p><u>JavaScript</u> is a versatile language that powers the web, enabling developers to create interactive 
        and dynamic websites. From simple animations to full-fledged web applications, JavaScript 
        is the backbone of modern web development. To truly master JavaScript, one must understand 
        its core concepts such as closures, prototypes, and asynchronous programming. 
        JavaScript's flexibility allows for a wide range of programming styles, from functional to object-oriented, 
        giving developers the freedom to choose the approach that best fits their needs. 
        With the advent of frameworks like Node.js, JavaScript has also expanded beyond the browser, 
        becoming a powerful tool for server-side development. Mastering JavaScript opens the door 
        to endless possibilities in web development, making it an essential skill for any developer.</p>
      `,
    },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold text-center">Add BLOG form</h1>
      <Formik
        initialValues={{ title: "", author: "", email: "", content: "" }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, setValues }) => (
          <>
            <Form className="mx-auto p-6 bg-white rounded-md shadow-md flex-1 w-full mb-8">
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <Field
                  type="text"
                  name="title"
                  placeholder="Enter blog title"
                  className="mt-1 block w-full px-3 py-2 border rounded-md"
                />
                <ErrorMessage
                  name="title"
                  component="small"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Author</label>
                <Field
                  type="text"
                  name="author"
                  placeholder="Enter author name"
                  className="mt-1 block w-full px-3 py-2 border rounded-md"
                />
                <ErrorMessage
                  name="author"
                  component="small"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter author email"
                  className="mt-1 block w-full px-3 py-2 border rounded-md"
                />
                <ErrorMessage
                  name="email"
                  component="small"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Content</label>
                <Field
                  as="textarea"
                  name="content"
                  placeholder="Write your blog content here... you can use html code for styling and formatting"
                  className="mt-1 block w-full px-3 py-2 border rounded-md h-18 min-h-fit"
                />
                <ErrorMessage
                  name="content"
                  component="small"
                  className="text-red-500"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>

            <p className="text-gray-400 text-center">
              Don't have time to type and check no worries click below dummy
              blog
            </p>
            <h2 className="text-2xl font-bold text-center mb-4">
              Choose a Dummy Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {dummyBlogs.map((blog, index) => (
                <BlogCard
                  key={index}
                  title={blog.title}
                  author={blog.author}
                  email={blog.email}
                  content={blog.content}
                  onCopy={() => setValues(blog)}
                />
              ))}
            </div>
          </>
        )}
      </Formik>
    </>
  );
};

export { BlogForm };
