import { Link } from "react-router-dom"
import classes from "./Clothes.module.css"

const Clothes = () => {
    const results = [];
    for (let id = 1; id <= 5; id++){
        results.push(<li> <Link to={"/products/" + id}> Products number #{id}</Link></li>)
    }
    return (  
        <ul className={classes.Clothes}>{results}</ul>
    );
}
export default Clothes;