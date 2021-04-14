import PostFull from "./PostFull/PostFull";
import PostList from "./PostList/PostList"
import {Route } from "react-router"

const Posts = ({ match }) => {
    return ( 
        <div>
{match.isExact}
        <PostList/>
        <Route path="/posts/:id" component={PostFull}/>
        </div>
     );
}
 
export default Posts;