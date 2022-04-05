import AddPutOff from '../components/AddPutOff'
const Producto = (props) => {
    return (
        <>
        <div className="col-md-3 text-center">
            <img className="product_img" src={props.srcImage}/>
            <h5 className='mt-3'>{props.name}</h5>
            <AddPutOff/>
        </div>
        </>
    )
}

export default Producto