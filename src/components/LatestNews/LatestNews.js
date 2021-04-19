import FullProducts from "./FullProducts/FullProducts";
import ListProducts from "./ListProducts/ListProducts"
import {Route } from "react-router"
import  classes from "./LatestNews.module.css"

const LatestNews = ({ match }) => {
    return ( 
        <div className="LatestNews">
{match.isExact}
        <ListProducts/>
        <Route path="/latestnews/:id" component={FullProducts}/>
        </div>
     );
}
LatestNews;