import { ADD_TODO, DELETE_TODO } from "../actions/actions";

const initialState = {
  blogs: JSON.parse(localStorage.getItem("blogs")) || [],
};

const reducer = (state = initialState, action) => {
  // const { type, content, id } = action;
  switch (action.type) {
    case ADD_TODO:
      const allBlogs = [
        ...state.blogs,
        { id: action.id, content: action.content },
      ];
      const blogJson = JSON.stringify(allBlogs);
      localStorage.setItem("blogs", blogJson);
      return {
        ...state,
        blogs: [...state.blogs, { id: action.id, content: action.content }],
      };
    case DELETE_TODO:
      const blogs = state.blogs.filter((blog) => blog.id !== action.id);
      const blogsJson = JSON.stringify(blogs);
      localStorage.setItem("blogs", blogsJson);
      return {
        ...state,
        blogs: blogs,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
