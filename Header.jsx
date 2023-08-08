import './headerstyle.css';
import GlobalNav from './GlobalNav.jsx';
function Header() {
    return (
        <header className="header">
            <img className ="header__logo"src="http://placekitten.com/g/200/300" alt="Cat"></img>
            <h1 className ="header__title" >
            Cats on the Internet
        </h1>
        <GlobalNav className="header__nav"/>
        </header>
    );
}

export default Header;