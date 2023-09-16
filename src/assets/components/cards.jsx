import '../css/cards.css'
import { View, Star, StarEmpty, Hearth, BoxFill } from '../svg/icons'
import { Btn } from './default'
export function InfoCard(props) {
    return <>
        <article className="card-feature">
            <img src={props.img} alt="Card icon" />
            <div className="feature-content">
                <span>{props.nombre}</span>
                <p>{props.descripcion}</p>
                <Btn texto={props.textoBoton} />
            </div>
        </article>
    </>
}

export function CategorieCard(props) {
    return (
        <div className="card-categorie " >
            <div className="back-filter"></div>
            <div className='blur-filter'>
                <p>
                    {props.categoria}
                </p>
                <Btn texto={props.textoBoton} />
            </div>

            <img src={props.img} alt={props.descripcionImagen} className='img-categories ' />

        </div>
    )
}

export function ProductList(props) {
    const productos = props.productos; // Debes pasar el array de productos como una prop

    return <>
       <div className='container-products'>
            {productos.map((producto, index) => (
                <div key={index} className="card-product">

                <div className="container-img">
                <img src={producto.img} alt={props.imgdes} />
                <span className="discount">
                    {producto.oferta}
                </span>
                <div className="button-group">
                    <span><View /></span>
                    <span><Hearth /></span>
                    <span className="add-cart"> <BoxFill /></span>
                </div>
            </div>
            <div className="content-card-product">
                <div className="stars">
                    <span><Star /></span>
                    <span><Star /></span>
                    <span><Star /></span>
                    <span><Star /></span>
                    <span><StarEmpty /></span>
                </div>
                <h3>
                    {producto.nombre}
                </h3>

                <div className="price">
                    <p>${producto.precioOferta}</p>
                    <span>${producto.precio}</span>
                </div>

            </div>

                </div>
            ))}
        </div>

    </>


}
