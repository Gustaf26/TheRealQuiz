import React from "react";
import { Icon } from "@iconify/react";
import bxGame from "@iconify/icons-bx/bx-game";
import { NavLink } from 'react-router-dom'

class navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg">
				<a className="navbar-brand rounded" href="/">
					<Icon icon={bxGame} />
				</a>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<NavLink to="/create-quiz" className="nav-link">Create Quiz</NavLink>
					</li>
					<li className="nav-item">
						<a href="/" className="nav-link">Quizzes</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default navbar;
