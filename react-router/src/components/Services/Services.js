import React from "react";
import {Link, Outlet} from "react-router-dom";

export default function Services(){

	return(
		<div>
			<h1>Services</h1>
			<nav>
				<Link to="/services/dev">Développement</Link>
				<Link to="/services/cyber">Cybersécurité</Link>
			</nav>
			<Outlet/>
		</div>
	);

}