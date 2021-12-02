import { LIKE_BLOG, SET_BLOGS, SET_FETCHING } from "./constants";

const initial_state = {
  blogs: [],
  liked_blog: [],
  is_fetching:true
};

function blogReducer(state = initial_state, action) {
  switch (action.type) {
    case LIKE_BLOG:
      return { ...state, liked_blog: state.liked_blog.push(action.value) };
    
    case SET_BLOGS:
      return {...state ,blogs:action.value}
    
    case SET_FETCHING:
      return {...state , is_fetching:action.value}

    default:
      return state
  }
}
export default blogReducer


