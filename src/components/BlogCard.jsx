import React from 'react';

const BlogCard = ({ title, author, email, content, onCopy }) => {
  // Function to truncate content
  const truncateContent = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="border p-4 rounded-md shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-1"><strong>Author:</strong> {author}</p>
      <p className="text-gray-700 mb-4"><strong>Email:</strong> {email}</p>
      <div
        className="text-gray-800 mb-4"
        dangerouslySetInnerHTML={{
          __html: truncateContent(content, 100), // Truncate content to 100 characters
        }}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={onCopy}
      >
        Copy to Form
      </button>
    </div>
  );
};

export default BlogCard;
