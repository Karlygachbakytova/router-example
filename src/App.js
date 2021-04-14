import { Redirect, Switch, Route } from "react-router"
import { NavLink } from "react-router-dom"
import About  from "./components/About/About"
import Home  from "./components/Home/Home"
import Posts from "./components/Posts/Posts"
import Contacts from "./components/Contacts/Contacts"
import NotFound from "./components/NotFound/NotFound"
import Products from "./components/Products/Products"
function App() {
const activeLinkStyle = {
  fontWeight: 'bold'
};


  return (
    <div className="App">
<ul>
  <li>
    <NavLink
     activeStyle={ActiveLinkStyle}
     activeClassName="activeLink" 
     to="/"
     exact
     > Home </NavLink>
     </li>
     <li>
    <NavLink
     activeStyle={ActiveLinkStyle}
     activeClassName="activeLink" 
     to="/contacts"
     > Contacts </NavLink>
     </li>
     <li>
    <NavLink
     activeStyle={ActiveLinkStyle}
     activeClassName="activeLink" 
     to="/about"
     > About </NavLink>
     </li>
     <li>
    <NavLink
     activeStyle={ActiveLinkStyle}
     activeClassName="activeLink" 
     to="/posts"
     > Posts </NavLink>
     </li>
     <li>
    <NavLink
     activeStyle={ActiveLinkStyle}
     activeClassName="activeLink" 
     to="/roducts"
     > Products </NavLink>
     </li>
</ul>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/posts" component={Posts}/>
      <Route path="/contacts" component={Contacts}/>
      <Route path="/products" component={Products}/>
      <Route path="/" component={NotFound}/>
     
      {/* <Redirect to="/"/> */}
      </Switch>
      {/* <About/> */}
    </div>
  );
}

export default App;
