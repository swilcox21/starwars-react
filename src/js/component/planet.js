import React from "react";
import PropTypes from "prop-types";

export const Planet = props => {
	return (
		<div className="planetsContainer mx-3 mt-5">
			<div className="card" style={{ width: "18rem" }}>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSp14vu4t7r_4vUAHVHy-5YWyEyi-U-_8qcbA&usqp=CAU"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{props.plan.name}</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the cards content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

Planet.propTypes = {
	plan: PropTypes.object
};
