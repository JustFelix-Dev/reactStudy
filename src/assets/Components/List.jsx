import { Link } from "react-router-dom";

const List = ({ details,handleDelete }) => {

    return ( 
        <>
           {
            details && 
            details.map((item)=>(
                <div className="item"  key={item.id}>
                    <Link to= {`/blogs/${item.id}`} >
                    <h3>{item.name}</h3>
                    <span>{item.country}</span>
                    <span className="span">{item.author}</span>
                    </Link>
                </div>
            ))
           }        
        </>
     );
}
 
export default List;