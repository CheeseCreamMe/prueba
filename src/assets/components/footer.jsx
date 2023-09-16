import { Facebook, Twitter, Instagram, WhapsApp } from "../svg/icons"
import logo from "../images/logo.jpg"
export default function Footer() {
    return (

        <footer className="footer">
            <div className="container container-footer">
                <div className="menu-footer">
                    <div className="contact-info">
                        <p className="title-footer">Información de Contacto</p>
                        <ul>
                            <li>
                                Dirección: 71 Pennington Lane Vernon Rockville, CT
                                06066
                            </li>
                            <li>Teléfono: 123-456-7890</li>
                            <li>Fax: 55555300</li>
                            <li>EmaiL: example@support.com</li>
                        </ul>
                        <div className="social-icons">
                            <span className="facebook">
                                <Facebook />
                            </span>
                            <span className="twitter">
                                <Twitter />
                            </span>
                            <span className="instagram">
                                <Instagram />
                            </span>
                            <span className="whatsapp">
                                <WhapsApp />
                            </span>
                        </div>
                    </div>

                    <div className="information">
                        <p className="title-footer">Información</p>
                        <ul>
                            <li><a href="#">Acerca de Nosotros</a></li>
                            <li><a href="#">Información Delivery</a></li>
                            <li><a href="#">Politicas de Privacidad</a></li>
                            <li><a href="#">Términos y condiciones</a></li>
                            <li><a href="#">Contactános</a></li>
                        </ul>
                    </div>

                    <div className="my-account">
                        <p className="title-footer">Mi cuenta</p>

                        <ul>
                            <li><a href="#">Mi cuenta</a></li>
                            <li><a href="#">Historial de ordenes</a></li>
                            <li><a href="#">Lista de deseos</a></li>
                            <li><a href="#">Boletín</a></li>
                            <li><a href="#">Reembolsos</a></li>
                        </ul>
                    </div>

                    <div className="newsletter">
                        <p className="title-footer">Boletín informativo</p>
                    </div>
                </div>

                <div class="copyright">
                    <p>
                        Desarrollado por CesarDev  &copy; 2022
                    </p>

                    <img src={logo} alt="Agromachinery logo" />
                </div>
            </div>
        </footer>
    )
}
