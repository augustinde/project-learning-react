import React from "react";

function Content(props){
	console.log("maj")
	return(
		<div className="content">
			<h1>{props.num}</h1>
		</div>
	)

}

export default React.memo(Content);