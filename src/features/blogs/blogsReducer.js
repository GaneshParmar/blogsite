import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';

const LocalKey = 'blogs';

const initialState = {
  blogs: getLocalStorage(LocalKey, true, {blogs: []}).blogs, 
};

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
      setLocalStorage(LocalKey, {blogs: state.blogs})
    },
    clearBlogs: (state, action)=>{
      state.blogs = [];
      setLocalStorage(LocalKey, {blogs: state.blogs});
    }
  },
});

export const { addBlog, clearBlogs } = blogsSlice.actions;

export default blogsSlice.reducer;
