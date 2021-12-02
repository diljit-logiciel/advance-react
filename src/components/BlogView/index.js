
const Blog = (props) => {
  const { id, title, content, post_on } = props;

  return (
    <div className='container my-2' key={id}>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <h6 className='card-subtitle mb-2 text-muted'>{post_on}</h6>
          <p className='card-text'>
           {content}
          </p>
          <a href='#' className='card-link'>
           like
          </a>
          <a href='#' className='card-link'>
            view
          </a>
        </div>
      </div>
    </div>
  );
};

const BlogView = ({ blogs }) => {
  return (
    <div className='container'>
        {
          blogs.map((blog) => {
            return <Blog key={"blog-"+blog.id} {...blog} />
          })
        }
    </div>
  );
};

export default BlogView;
