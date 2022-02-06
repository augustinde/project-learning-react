import React from "react";
import {Link, NavLink} from "react-router-dom";

export default function Navbar(){

	return(

		<nav>
			<NavLink
				to="/"
				style={({isActive}) => {
					return isActive ? {color:"red"} : {color:"blue"}
				}}
			>Accueil</NavLink>
			<NavLink to="/services"
					 style={({isActive}) => {
						 return isActive ? {color:"red"} : {color:"blue"}
					 }}>Services</NavLink>
			<NavLink to="/contact"
					 style={({isActive}) => {
						 return isActive ? {color:"red"} : {color:"blue"}
					 }}>Contact</NavLink>
		</nav>

	);

}