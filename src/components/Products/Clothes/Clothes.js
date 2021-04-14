import { Link } from "react-router-dom"
const Clothes = () => {
    const results = [];
    for (let id = 1; id <= 5; id++){
        results.push(<li> <Link to={"/products/" + id}> Products number #{id}</Link></li>)
    }
    return (  
        <ul>{results}</ul>
    );
}
export default Clothes;