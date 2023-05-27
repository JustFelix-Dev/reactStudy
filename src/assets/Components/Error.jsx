import { Link } from "react-router-dom";

const Error = () => {
    return ( 
        <>
        <h2>Sorry!</h2>
        <h3>Page Not Found</h3>
        <Link to={'/'}>
         <h5>Back to homePage..</h5>
        </Link>
        </>
     );
}
 
export default Error;