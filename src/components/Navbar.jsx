import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars, faCircleUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Logo from '../components/images/logo.png'
import { useEffect } from 'react'
function Navbar() {   
    useEffect(() => {
        const scriptTag = document.createElement('script');

        scriptTag.src = "assets/js/main.js";
        scriptTag.async = true;

        document.body.appendChild(scriptTag);
        return () => {
            document.body.removeChild(scriptTag);
        }
    }, []);

  return (
    <div>
        <header className='header'>
            <div className="header-1">

                <a href="" className="logo">
                    <img className='logo-img' src={Logo} alt="" />
                </a>

                <form action="" className="search-box-container">
                    <input type="search" id="search-box" placeholder="search here..."></input>
                    <label for="search-box">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </label>
                </form>

            </div>

            <div className="header-2">

                <div id="menu-bar">
                    <FontAwesomeIcon icon={faBars} />
                </div>

                <nav className="navbar">
                    <a className="menu-links" href="#home">home</a>
                    <a className="menu-links" href="#home">category</a>
                    <a className="menu-links" href="#home">product</a>
                    <a className="menu-links" href="#home">deal</a>
                    <a className="menu-links" href="#home">contact</a>
                </nav>
                <div className="icons">
                    <a href="#" className="menu-btns">
                        <FontAwesomeIcon icon={faCircleUser} />
                    </a>
                    <a href="#" className="menu-btns">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </a>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Navbar