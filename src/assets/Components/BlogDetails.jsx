import useParams  from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {

    const { id } = useParams();
    const { data:blog,isPending,error} = useFetch('http://localhost:8000/details/' + id);
    const handleDelete = ()=>{
        fetch('http://localhost:8000/details/'+ id,{
            method:'DELETE'
        })
      history.push('/')
    }
    return ( 
        <>
         <div className="blog-details">
        {error && <div>{error}</div>}
        { isPending && <div>Loading....</div>}
        { blog &&( 
                <div className="blog" key={blog.id}>
                    <div>{blog.name}</div>
                    <p>{blog.bio}</p>
                    <p>{blog.country}</p>
                    <button className="btn btn-info" onClick={handleDelete}>Delete</button>
                </div>
   )}

         </div>
        </>
     );
}
 
export default BlogDetails;