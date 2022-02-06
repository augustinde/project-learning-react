import React from "react";
import {useNavigate} from 'react-router-dom';

export default function NotFound(){

	const navigate = useNavigate()

	return(
		<div>
			<button onClick={() => navigate("/")}>Retour à l'accueil</button>
		</div>
	);
}