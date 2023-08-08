import './globalnavstyle.css';
const menu = [
    {
    name : "Cats",
    path : "home.html",
    },
    {
     name : "Breed",
     path : "about.html",
     },
     {
      name : "Kittens",
      path : "support.html",
     },

];
function GlobalNav({className}) {
    
const list = menu.map(item =>{
    return(
        <li className="global-nav__item" key={item.name}>
            <a className="global-nav__link" href={item.path}>
                {item.name}
            </a>
        </li>
        );
});
    
    return (
        <nav className={`global-nav ${className}`}>
            <ul className="global-nav__list">
                {list}
            </ul>
        </nav>
    );
}
export default GlobalNav;