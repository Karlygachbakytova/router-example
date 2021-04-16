import { Link } from "react-router-dom"
import classes from "./ListProduct.module.css"

const ListProduct = () => {
    const results = [];
    for (let id = 1; id <= 5; id++){
        results.push(<li> <Link to={"/products/" + id}> Products number #{id}</Link></li>)
    }
    return (  
        <ul className={classes.ListProduct}>{results}</ul>
    );
}
export default ListProduct;