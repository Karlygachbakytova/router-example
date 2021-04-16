import classes from "./Contacts.module.css"
const Contacts = () => {
    return ( 
        <div className={classes.Contacts}>
            <h1 className={classes.uscon}>Our contacts</h1>
            <span>
         <p> <strong className={classes.Title}>Phone:</strong> + 864-411-0864 <br/> + 234-864-2346</p>
            
         <p> <strong className={classes.Title}>Addres:</strong> 117105. Russia Moscow Nagatinskaya </p>
<p><strong className={classes.Title}>E-mail: </strong>  info.mail.ru</p>

            </span>
        </div>
    );
}
 
 
export default Contacts;