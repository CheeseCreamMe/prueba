import '../css/home.css'

import { InfoCard, CategorieCard, CarProduct } from '../components/cards'
import { Btn } from '../components/default'

//imagenes usadas para template
import p1 from "../images/products/1.webp"
import logotipo from '../images/logo.jpg'
//svg usados para template
import cat from "../svg/cat.svg"
import contact from "../svg/contact_us.svg"
function Home() {
    return <>
        <title>Agromachinery || Inicio</title>
        <section className="banner">
            <div className="back-filter">
                <div className="content-banner">
                    <p className="slogan">
                        " Fortaleciendo tu Produccion "
                    </p>
                    <Btn texto="Descubre mas" />
                </div>
            </div>
        </section>
        <main className="main-content">

            <section className="container container-feactures">
                <InfoCard
                    img={cat}
                    nombre="Hola"
                    descripcion="Lorem ipsum dolor
                    sit amet consectetur adipisicing
                    elit. Id enim at in dolorum aliquam!"
                    textoBoton="Ver mas.."
                />
                <InfoCard
                    img={cat}
                    nombre="Hola"
                    descripcion="Lorem ipsum dolor
                    sit amet consectetur adipisicing
                    elit. Id enim at in dolorum aliquam!"
                    textoBoton="Ver mas.."
                />
                <InfoCard
                    img={cat}
                    nombre="Hola"
                    descripcion="Lorem ipsum dolor
                    sit amet consectetur adipisicing
                    elit. Id enim at in dolorum aliquam!"
                    textoBoton="Ver mas.."
                />
                <InfoCard
                    img={cat}
                    nombre="Hola"
                    descripcion="Lorem ipsum dolor
                    sit amet consectetur adipisicing
                    elit. Id enim at in dolorum aliquam!"
                    textoBoton="Ver mas.."
                />
            </section>
            <section className="container top-categories">
                <h1 className="heading-1">
                    Categorias
                </h1>
                <div className="container-categories">
                    <CategorieCard
                        img={cat}
                        categoria="categoria1"
                        descripcionCategoria="Hola que tal"
                        textoBoton="Ver mas.."
                    />
                    <CategorieCard
                        img={contact}
                        categoria="categoria2"
                        descripcionCategoria="Hola que tal"
                        textoBoton="Ver mas.."
                    />
                    <CategorieCard
                        img={cat}
                        categoria="categoria3"
                        descripcionCategoria="Hola que tal"
                        textoBoton="Ver mas.."
                    />
                    <CategorieCard
                        img={contact}
                        categoria="categoria4"
                        descripcionCategoria="Hola que tal"
                        textoBoton="Ver mas.."
                    />
                    <CategorieCard
                        img={cat}
                        categoria="categoria5"
                        descripcionCategoria="Hola que tal"
                        textoBoton="Ver mas.."
                    />
                    <CategorieCard
                        img={contact}
                        categoria="categoria6"
                        descripcionCategoria="Hola que tal"
                        textoBoton="Ver mas.."
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