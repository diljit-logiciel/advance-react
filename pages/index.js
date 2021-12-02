import Layout from "../src/components/Layout";
import BlogView from "../src/components/BlogView";
import { useEffect } from "react";
import { BLOG_URL } from "../src/urls"
import { useSelector, useDispatch } from "react-redux";
import { setBlog,setFetching } from "../src/modules/Blog/actions";

import { toJS, fromJS } from "immutable";
import CircularProgress from '@mui/material/CircularProgress';


export default function Home() {
  const state = useSelector((state) => state.blogReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    let fetchBlogs = fetch(BLOG_URL);

    fetchBlogs
      .then((resp) => {
        dispatch(setFetching(false))
        return resp.json();
      })
      .then((data) => {
        dispatch(setBlog(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Layout>
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-md-8 mx-auto'>
            {!state.is_fetching ? (
              <BlogView blogs={state.blogs}></BlogView>
            ) : (
              <div className="container text-center">
                 <CircularProgress />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
