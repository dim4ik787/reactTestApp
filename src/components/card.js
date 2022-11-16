import React from "react";

const Card = (props) => {
	const { id, name, emeil } = props;
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img src={`https://robohash.org/${id}`} alt="robot" />
			<div>
				<h2>{name}</h2>
				<p>{emeil}</p>
			</div>
		</div>
	);
}

export default Card;