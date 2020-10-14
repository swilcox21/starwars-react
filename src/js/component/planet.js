import React from "react";
import PropTypes from "prop-types";

export const Planet = props => {
	return (
		<div className="planetsContainer mx-3 mt-5">
			<div className="card" style={{ width: "18rem" }}>
				<img
					src="https://media.moddb.com/images/groups/1/9/8071/Blockade.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{props.plan.name}</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the cards content.
					</p>
					<div className="d-flex justify-content-between">
						<a href="#" className="btn learnMore">
							Go somewhere
						</a>
						<a href="#" className="btn heart">
							<i className="far fa-heart" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

Planet.propTypes = {
	plan: PropTypes.object
};
