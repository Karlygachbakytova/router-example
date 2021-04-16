import { Redirect, Switch, Route } from "react-router"
import { NavLink } from "react-router-dom"
import About  from "./components/About/About"
import Home  from "./components/Home/Home"
import Posts from "./components/Posts/Posts"
import Contacts from "./components/Contacts/Contacts"
import NotFound from "./components/NotFound/NotFound"
import Products from "./components/Products/Products"
import "./App.css";
import Reviews from "./components/Reviews/Reviews"
import Support from "./components/Support/Support"
function App() {
  const activeLinkStyle = {
  fontWeight: 'bold'
};


  return (
    <div className="App">
<ul className="Nav">
  <li className="NavLink">
    <NavLink
     activeStyle={activeLinkStyle}
     activeClassName="activeLink" 
     to="/"
     exact
     > Home </NavLink>
     </li>
     <li>
    <NavLink
     activeStyle={activeLinkStyle}
     activeClassName="activeLink" 
     to="/about"
     > About us </NavLink>
     </li>
     <li>
    <NavLink
     activeStyle={activeLinkStyle}
     activeClassName="activeLink" 
     to="/contacts"
     > Contacts </NavLink>
     </li>
 
     <li>
    <NavLink
     activeStyle={activeLinkStyle}
     activeClassName="activeLink" 
     to="/posts"
     > Posts </NavLink>
     </li>
     <li>
    <NavLink
     activeStyle={activeLinkStyle}
     activeClassName="activeLink" 
     to="/products"
     > Products </NavLink>
     </li>
     <li>
    <NavLink
     activeStyle={activeLinkStyle}
     activeClassName="activeLink" 
     to="/reviews"
     > Reviews </NavLink>
     </li>
     <li>
    <NavLink
     activeStyle={activeLinkStyle}
     activeClassName="activeLink" 
     to="/support"
     > Support </NavLink>
     </li>
</ul>
      <Switch>
      <Route className="Link" exact path="/" component={Home} active/>
      <Route path="/about" component={About}/>
      <Route path="/posts" component={Posts}/>
      <Route path="/contacts" component={Contacts}/>
      <Route path="/products" component={Products}/>
      <Route path="/reviews" component={Reviews}/>
      <Route path="/support" component={Support}/>
      <Route path="/" component={NotFound}/>
     
      {/* <Redirect to="/"/> */}
      </Switch>
      {/* <About/> */}
    </div>
  );
}

export default App;
