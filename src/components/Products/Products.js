import Clothes from "./Clothes/Clothes";
import Shoes from "./Shoes/Shoes"
import {Route } from "react-router"

const Products = ({ match }) => {
    return ( 
        <div className="products">
{match.isExact}
        <Clothes/>
        <Route path="/products/:id" component={Shoes}/>
        </div>
     );
}
 
export default Products;