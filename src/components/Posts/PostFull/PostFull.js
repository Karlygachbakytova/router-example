import classes from "./PostFull.module.css";
const PostFull = ({ match }) => {
    return ( 
        <h1 className={classes.PostFull}>Post #{match.params.id}</h1>
     );
}
 
export default PostFull;