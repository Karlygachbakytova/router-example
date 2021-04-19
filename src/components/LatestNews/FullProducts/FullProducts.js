import classes from "./FullProducts.module.css";

const FullProducts = ({ match }) => {
    return ( 
        <h1 className={classes.FullProducts}>Product #{match.params.id}</h1>
     );
}
 
export default FullProducts;