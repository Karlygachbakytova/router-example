import FullProducts from "./FullProducts/FullProducts";
import ListProducts from "./ListProducts/ListProducts"
import {Route } from "react-router"

const Products = ({ match }) => {
    return ( 
        <div className="Products">
{match.isExact}
        <ListProducts/>
        <Route path="/products/:id" component={FullProducts}/>
        </div>
     );
}
 
export default Products;