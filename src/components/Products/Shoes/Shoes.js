import classes from "./Shoes.module.css";

const Shoes = ({ match }) => {
    return ( 
        <h1 className={classes.Shoes}>Product #{match.params.id}</h1>
     );
}
 
export default Shoes;