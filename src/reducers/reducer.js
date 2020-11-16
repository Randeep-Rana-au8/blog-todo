import { ADD_TODO, DELETE_TODO } from "../actions/actions";

const initialState = {
  blogs: [],
};

const reducer = (state = initialState, action) => {
  // const { type, content, id } = action;
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        blogs: [...state.blogs, { id: action.id, content: action.content }],
      };
    case DELETE_TODO:
      const blogs = state.blogs.filter((blog) => blog.id !== action.id);
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
