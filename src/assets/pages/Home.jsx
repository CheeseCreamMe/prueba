import '../css/home.css'
import logotipo from '../images/logo.jpg'
import { InfoCard, CategorieCard, CarProduct } from '../components/cards'
import { Btn } from '../components/default'
import cat from "../svg/cat.svg"
import p1 from "../images/products/1.webp"

function Home() {
    return <>
        <title>Agromachinery || Inicio</title>
        <section className="banner">
            <div className="back-filter">
                <div className="content-banner">
                    <img className="Logo-agromachinery" src={logotipo} alt="Logo de la empresa agromachinery" />
                    <p className="slogan">
                        " Fortaleciendo tu Produccion"
                    </p>
                        <Btn texto="Descubre mas"/>
                </div>
            </div>
        </section>
        <main className="main-content">

            <section className="container container-feactures">

                <InfoCard
                    img={cat}
                    nombre="Lorem ipsum dolor
                     sit amet consectetur adipisicing
                      elit. Id enim at in dolorum aliquam
                      accusantium, placeat quae obcaecati
                       tenetur iste magnam voluptatibus
                       alias deleniti aliquid maxime.
                       imilique nisi aperiam dolor!
                    "
                    textoBoton="Descubre"
                    />
                                <InfoCard
                    img={cat}
                    nombre="Lorem ipsum dolor
                     sit amet consectetur adipisicing
                      elit. Id enim at in dolorum aliquam
                      accusantium, placeat quae obcaecati
                       tenetur iste magnam voluptatibus
                       alias deleniti aliquid maxime.
                       imilique nisi aperiam dolor!"
                       textoBoton="Ver mas.."
                />
                                <InfoCard
                    img={cat}
                    nombre="Lorem ipsum dolor
                     sit amet consectetur adipisicing
                      elit. Id enim at in dolorum aliquam
                      accusantium, placeat quae obcaecati
                       tenetur iste magnam voluptatibus
                       alias deleniti aliquid maxime.
                       imilique nisi aperiam dolor!"
                       textoBoton="Ver mas.."

                />
                                <InfoCard
                    img={cat}
                    nombre="Lorem ipsum dolor
                     sit amet consectetur adipisicing
                      elit. Id enim at in dolorum aliquam
                      accusantium, placeat quae obcaecati
                       tenetur iste magnam voluptatibus
                       alias deleniti aliquid maxime.
                       imilique nisi aperiam dolor!"
                       textoBoton="Ver mas.."
                />
            </section>
            <section className="container top-categories">
                <h1 className="heading-1">
                    Categorias
                </h1>
                <div className="container-categories">
                    <CategorieCard
                        categoria="xdd"
                    />
                    <CategorieCard
                        categoria="xdd"
                    /> <CategorieCard
                        categoria="xdd"
                    /> <CategorieCard
                        categoria="xdd"
                    /> <CategorieCard
                        categoria="xdd"
                    /> <CategorieCard
                        categoria="xdd"
                    />
                </div>
            </section>

            <section className="container top-products">
                <h1 className="heading-1">
                    Productos
                </h1>
                <div className="container-options">
                    <span>Destacados</span>
                    <span>Mas Recientes</span>
                    <span>Mejor Vendidos</span>
                </div>
                <div className="container-products">
                    <CarProduct
                        precio="150"
                        oferta="10%"
                        precioOferta="140"
                        img={p1}
                        imgdes="xdd"
                    >
                    </CarProduct>
                </div>
                <div className="container-products">
                    <CarProduct
                        precio="150"
                        oferta="10%"
                        precioOferta="140"
                        img={p1}
                        imgdes="xdd"
                    >
                    </CarProduct>
                </div>
            </section>
        </main>
    </>
}

export default Home