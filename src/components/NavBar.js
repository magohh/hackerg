
import logo from '../img/logo.png';
import CartWidget from '../components/CartWidget.js';
import {Link} from 'react-router-dom'
import Categories from './Categories'

const NavBar = () =>{
	return(
	<div>
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<Link to='/' className="navbar-brand"><img className="logo" src={logo}></img></Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-between" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
						<Link to='/about' className="nav-link active" aria-current="page">Como funciona</Link>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Diseña tu tarjeta</a>
						</li>
					</ul>
					<Categories/>
					<div><CartWidget/></div>
				</div>
			</div>
		</nav>
	</div>
	)
}

export default NavBar