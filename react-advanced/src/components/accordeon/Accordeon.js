import React, {useEffect, useRef, useState} from "react";
import "./Accordeon.css";
import Chevron from "./chevron-en-bas.png";

export default function Accordeon(){

	const [toggle, setToggle] = useState(false);


	const toggleState = () =>{
		setToggle(!toggle);
	}

	const [heightEl, setHeightEl] = useState();

	const refHeight = useRef()

	useEffect(() => {

		setHeightEl(`${refHeight.current.scrollHeight}px`)

	}, []);

	return(
		<div className="accord">
			<div className="accord-visible" onClick={toggleState}>
				<h2>Lorem ipsum dolor sit amet.</h2>
				<img src={Chevron} alt=""/>
			</div>

			<div ref={refHeight} className={toggle ? 'accord-toggle animated' : 'accord-toggle '}
			style={{height: toggle ? `${heightEl}` : "0px"}}>
				<p aria-hidden={toggle ? "true" : "false"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto consequuntur doloribus dolorum exercitationem maiores nemo nulla officia velit vero!</p>
			</div>
		</div>
	);
}