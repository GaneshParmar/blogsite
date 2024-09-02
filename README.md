# Blogsite
[Live Website](https://66d5be3b8b324c0a2dda84fe--ganeshblogs.netlify.app/blogs)
This is a React application built with Vite that allows users to manage blogs. It uses Redux Toolkit for state management and localStorage to persist data.

## Features

- **Home Route (`/`)**: 
  - Displays a form to add new blogs.
  - The form includes pre-filled blog templates to save time.
  - Upon submission, the form navigates to the `/blogs` route.
  
- **Blogs Route (`/blogs`)**: 
  - Displays all submitted blogs.
  - Includes buttons to navigate to the form page, view older/newer blogs, and clear all blogs.

## Prerequisites

- Node.js (version 14 or higher)

## Getting Started

To run this project on your local server, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/GaneshParmar/blogsite.git
   cd blogsite
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   npm run dev
   ```

   Open your browser and navigate to `http://localhost:5173` to view the application.

## Usage

- **Home Route (`/`)**:
  - Fill out the form to add a new blog. You can use the pre-filled templates provided.
  - Submit the form to navigate to the `/blogs` route.

- **Blogs Route (`/blogs`)**:
  - View all blogs submitted through the form.
  - Use the navigation buttons to view older or newer blogs.
  - Use the "Clear All Blogs" button to remove all blogs.

## State Management

- The application uses [Redux Toolkit](https://redux-toolkit.js.org/) for state management.
- Blogs are persisted in `localStorage` to maintain data across sessions.

## Navigation

- On the `/blogs` page, use the button provided to navigate back to the form page to add more blogs.

## Note

- This project uses plain JavaScript, not TypeScript.

## License

[MIT](https://opensource.org/licenses/MIT)
```

### Summary of Changes:
- Added a section for running the application locally.
- Updated features to reflect the functionality and routes.
- Noted that the project uses Redux Toolkit and localStorage.
- Provided navigation details between pages.
- Mentioned that the project uses plain JavaScript.

Feel free to adjust any specifics as needed!
