import './App.css';
import {useState, useEffect, useMemo, useCallback} from "react";
import Modal from "./components/Modal/Modal";
import Accordeon from "./components/accordeon/Accordeon";
import Navbar from "./components/navbar/Navbar";

function App() {

	return (
		<div className="App">
			<Navbar/>
			<Modal t={1}/>
			<Modal t={2}/>
			<Accordeon />
		</div>
	);
}

export default App;
