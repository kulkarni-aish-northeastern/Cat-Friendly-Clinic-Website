import{useState} from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Support from './Support.jsx';
import NavBar from './NavBar.jsx';
function Main() {
    const[page , setpage] = useState('Home');
    return (
     <main>
         <NavBar setpage={setpage}/>
         {page === 'Home' && <Home/>}
         {page === 'About' && <About/>}
         {page === 'Support' && <Support/>}
     </main>   
    );
}

export default Main;