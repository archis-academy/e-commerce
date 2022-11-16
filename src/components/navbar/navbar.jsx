import "./navbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from "@fortawesome/free-regular-svg-icons"
import { faBars, faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export default function Navbar(){
    
   const navbarLinksList = [
    { text : "Yeni" , url: "/"},
    { text : "Cüzdanlar" , url: "/"},
    { text : "T Serisi" , url: "/"},
    { text : "Kartlık" , url: "/"},
    { text : "Serhat Cüzdanı" , url: "/"},
    { text : "A5 Organizer" , url: "/"},
   ]

   const navbarLinks = navbarLinksList.map( (link)=> {
        return <a href={link.url}>{link.text.toUpperCase()}</a>
    })
   
    
    return ( 
    <div className="navbar">
        <div>
            <img src="/assets/Logo.png" alt="logo"/>
        </div>

        <div className="links">
            {navbarLinks}
        </div>

        <div className="buttonGroup">
            <button><FontAwesomeIcon icon={faUser} /></button>
            <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            <div className="cart">
                <button><FontAwesomeIcon icon={faCartShopping} /></button>
                <div className="shoppingItemCounter">0</div>
            </div>
        </div>

        <button className="mobileMenu"><FontAwesomeIcon icon={faBars} /></button>
    </div> )
}