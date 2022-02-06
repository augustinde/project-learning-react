import React, {useState} from "react";
import "./Modal.css";

export default function Modal(props){

	const [modal, setModal] = useState(false);


	const toggleModal = () => {
		setModal(!modal)
	}


	return(
		<>
			<button className="btn-modal" onClick={toggleModal}>Open</button>

			{modal && (
				<div className="overlay">
					<div className="modal">
						<div className="modal-content">
							<h2>Hello modal {props.t}</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, nemo.</p>
							<button onClick={toggleModal} className="close-modal">Close</button>
						</div>
					</div>
				</div>
			)}

		</>
	);

}