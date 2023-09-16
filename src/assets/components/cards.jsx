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
        <div className="card-categorie back-filter" >
            <div className='blur-filter'>
                <p>
                    {props.categoria}
                </p>
                <Btn texto={props.textoBoton} />
            </div>
            <img src={props.img} alt={props.descripcionImagen} className='img-categories' />

        </div>
    )
}
export function CarProduct(props) {
    return (
        <div className="card-product">
            <div className="container-img">
                <img src={props.img} alt={props.imgdes} />
                <span className="descuento">
                    {props.oferta}
                </span>
                <div className="button-group">
                    <span><View /></span>
                    <span><Hearth /></span>
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
                    {props.nombre}
                </h3>
                <span className="add-car">
                    <BoxFill />
                </span>
                <p className="price">
                    ${props.precio}
                </p>
                <span>${props.precioOferta}</span>
            </div>
        </div>
    )
}