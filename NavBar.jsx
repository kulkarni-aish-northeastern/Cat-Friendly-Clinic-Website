import './navbarstyle.css';
function NavBar({setpage})
{
    function Go(event , target){
event.preventDefault();
setpage(target);
    }
    return(
<navbar className = "menubar">
    
    <li><a className = "nav-links" onClick={(event) => Go(event,'Home')} href="/">Home</a></li>
    <li><a className = "nav-links" onClick={(event) => Go(event,'About')} href="#ß">About</a></li>
    <li><a className = "nav-links" onClick={(event) => Go(event,'Support')} href="ßß">Support</a></li>
 
</navbar>
    );
}

export default NavBar;  