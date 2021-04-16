import ListProducts from "./ListProducts/ListProducts";
import Shoes from "./Shoes/Shoes"
import {Route } from "react-router"

const Products = ({ match }) => {
    return ( 
        <div className="Products">
{match.isExact}
        <ListProducts/>
        <Route path="/products/:id" component={Shoes}/>
        </div>
     );
}
 
export default Products;