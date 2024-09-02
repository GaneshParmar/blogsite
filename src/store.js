// store.js
import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from './features/blogs/blogsReducer'

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
  },
  // other options e.g middleware, go here
})