import classes from "./FullProduct.module.css";

const FullProduct = ({ match }) => {
    return ( 
        <h1 className={classes.FullProduct}>Product #{match.params.id}</h1>
     );
}
 
export default FullProduct;