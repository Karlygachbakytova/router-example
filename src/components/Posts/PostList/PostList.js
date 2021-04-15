import { Link } from "react-router-dom"
import classes from "./PostList.module.css";
const PostList = () => {

    const results = [];
    for (let id = 1; id <= 5; id++){
        results.push(<li> <Link to={"/posts/" + id}> Post number #{id}</Link></li>)
    }
    return (  
        <ul className={classes.PostList}>{results}</ul>
    );
}
 
export default PostList;