
import logo from '../img/logo.png';
import CartWidget from '../components/CartWidget.js';

const NavBar = () =>{
	return(
	<div>
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<a className="navbar-brand" href="#"><img className="logo" src={logo}></img></a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-between" id="navbarNav">
					<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link active" aria-current="page" href="#">Como funciona</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Diseña tu tarjeta</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Tarjetas</a>
					</li>
					</ul>
					<div><CartWidget/></div>
				</div>
			</div>
		</nav>
	</div>
	)
}

export default NavBar