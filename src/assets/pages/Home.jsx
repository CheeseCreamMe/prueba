import '../css/home.css'

import { InfoCard, CategorieCard, ProductList } from '../components/cards'
import { Btn } from '../components/default'

//imagenes usadas para template
import p1 from "../images/products/1.webp"
import logotipo from '../images/logo.jpg'
//svg usados para template
import cat from "../svg/cat.svg"
import contact from "../svg/contact_us.svg"
function Home() {
    //aca iria el array de productos proporcionado por el back

    const productos = [
        {
            nombre: "producto1",
            oferta: 10,
            precio: 150,
            img:p1,
            precioOferta:135,
        },
       {
            nombre: "producto2",
            oferta: 20,
            precio: 150,
            precioOferta:120,
            img:p1,
            imgDes:"imagen"
        },
        {
            nombre: "producto3",
            oferta: 10,
            precio: 150,
            precioOferta:135,
            img:p1,
        },
        {
            nombre: "producto4",
            oferta: 10,
            precio: 150,
            precioOferta:135,
            img:p1,
        },
    ]


    return <>
        <title>Agromachinery || Inicio</title>
        <section className="banner">
            <div className="content-banner">
                <p className="slogan">
                    " Fortaleciendo tu Produccion "
                </p>
                <Btn texto="Descubre mas" />
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
                <ProductList productos={productos} />
            </section>

        </main>
    </>
}

export default Home