import React from "react";
import PropTypes from "prop-types";

export const Character = props => {
	return (
		<div className="planetsContainer mx-3">
			<div className="card" style={{ width: "18rem" }}>
				<img
					src="data:image/jpeg;base64,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"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{props.char.name}</h5>
					<div className="card-text">
						<p>Birth date: {props.char.birth_year}</p>
						<p>Gender: {props.char.gender}</p>
						<p>height: {props.char.height}</p>
						<p>Wieght: {props.char.mass}</p>
						<p>Skin Color: {props.char.skin_color}</p>
					</div>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
Character.propTypes = {
	char: PropTypes.object
};
