import {Link} from 'react-router-dom'

const Categories = ()=>{
    return(
        <>
        <ul className='categories'>
            <li><Link to='/category/1'>Objetos</Link></li>
            <li><Link to='/category/2'>Comida</Link></li>
            <li><Link to='/category/3'>Servicios</Link></li>
        </ul>
        </>
    )
}

export default Categories;