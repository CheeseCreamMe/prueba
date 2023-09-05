import { Link } from 'react-router-dom'
import '../css/header.css'
import '../css/body.css'

import { ScrollToTop } from './default'
import { Headset, BoxEmpty, Search, Toogle } from '../svg/icons'
export default function Header() {
    return <>
        <header>
            <div className="top-bar">
                <div className="container hero">
                    <div className="customer-support">
                        <Headset />
                        <section className="content-column">
                            <span className="text">Linea de Soporte</span>
                            <span className="number">9999-9999</span>
                        </section>
                    </div>
                    <div className="container-logo">
                        <h1>
                            <Link className='links logo' to="home">
                            MACHINERY
                            </Link>
                        </h1>
                    </div>
                    <div className="container-user">
                        <div className="content-column">
                            <BoxEmpty />
                            <span className='text'> Mi carrito</span>
                            <span className='number'> (0)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-navbar">
                <nav className="container navbar">
                    <i><Toogle /></i>
                    <ul className="menu">
                         <NavLink text="Inicio" url="home" />
                        <NavLink text="Contactanos" url="contact" />
                        <NavLink text="Conocenos" url="about" />
                        <NavLink text="Productos" url="products" />
                    </ul>
                    <form className="search">
                        <input className='search-im' type="search" name="buscar" id="buscar" placeholder='Buscar...' />
                        <button className='btn-search'><Search /></button>
                    </form>
                </nav>
            </div>
        </header>
        <ScrollToTop />
    </>
}

function NavLink(props) {
    return (
        <Link className="links" to={props.url}> {props.text} </Link>
    )
}