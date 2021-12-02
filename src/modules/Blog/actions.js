import { LIKE_BLOG,SET_BLOGS,SET_FETCHING } from "./constants"

export const setLikeBlog = (value) => {
  return {type:LIKE_BLOG , value}
}

export const setBlog = (value) => {
  return {type:SET_BLOGS,value}
}

export const setFetching = (value) => {
  return {type:SET_FETCHING,value}
}