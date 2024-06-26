

export const FilhoBlog = ({blogs,endereco}) => {
   
    // const blogs = props.blogs;
    // const endereco = props.endereco;
  
    return (
    <>
        <hr></hr>
        <p>Este é o componente filho : FilhoBlog</p>
        <div>
        {blogs.map((blog) => (            
          <ul key={blog.id}>
            <li>{blog.title} {blog.id} {endereco}
            </li>
          </ul>
        ))}
        </div>
        <hr></hr>
    </>
  )
}
