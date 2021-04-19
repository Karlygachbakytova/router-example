import { Link } from "react-router-dom"
import classes from "./ListProducts.module.css"

const ListProducts = () => {
    const results = [];
    for (let id = 1; id <= 5; id++){
        results.push(<li> <Link to={"/latestnews/" + id}> Products number #{id}</Link></li>)
    }
    return (  
        <ul className={classes.ListProduct}>{results}</ul>
    );
}
export default ListProducts;