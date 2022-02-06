import {useState} from "react";
import Item from "./Item";
import {uid} from 'uid';

export default function Form(){

	const [dataArr, setDataArr] = useState([
		{txt: "Apprendre React", id: uid()},
		{txt: "Apprendre Laravel", id: uid()},
		{txt: "Apprendre Angular", id: uid()}
	])

	const [stateInput, setStateInput] = useState();

	const deleteElement = id => {
		const filteredState = dataArr.filter(item => {
			return item.id !== id;
		})
		setDataArr(filteredState)
	}

	const linkedInput = e => {
		setStateInput(e)
	}

	const addTodo = e => {
		e.preventDefault()
		const newArr = [...dataArr]

		const newTodo = {};

		newTodo.txt = stateInput
		newTodo.id = uid()

		newArr.push(newTodo)
		setDataArr(newArr)
		setStateInput("")

	}

	return(
		<div className="m-auto px-4 col-12 col-sm-10 col-lg-6">

			<form onSubmit={e => addTodo(e)} className="mb-3">
				<label htmlFor="todo" className="form-label mt-3">Chose à faire</label>
				<input
					value={stateInput}
					type="text"
					className="form-control"
					id="todo"
					onInput={e => linkedInput(e.target.value)}
				/>

				<button
					className="mt-2 btn btn-primary d-block"
				>Envoyer</button>
			</form>

			<h2>Liste des choses à faire :</h2>

			<ul className="list-group">
				{dataArr.map((item) => {
					return(
						<Item
							key={item.id}
							txt={item.txt}
							id={item.id}
							delFunc={deleteElement}
						/>
					)
				})}
			</ul>

		</div>
	)
}

