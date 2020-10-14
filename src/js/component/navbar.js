import React from "react";
import Proptypes from "prop-types";

export const NavBar = () => {
	return (
		<nav className="navbar navbar-dark" id="myNavBar">
			<span className="navbar-brand mb-0 h1 pl-5">Navbar</span>
			<span className="nav-item dropdown pr-5">
				<a
					className="nav-link dropdown-toggle"
					href="#"
					id="navbarDropdown"
					role="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Dropdown
				</a>
				<div className="dropdown-menu" aria-labelledby="navbarDropdown">
					<a className="dropdown-item" href="#">
						Action
					</a>
					<a className="dropdown-item" href="#">
						Another action
					</a>
					<div className="dropdown-divider" />
					<a className="dropdown-item" href="#">
						Something else here
					</a>
				</div>
			</span>
		</nav>
	);
};
