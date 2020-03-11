import React from "react";
import { db } from "../fireStore/firebase";

class QuizCreator extends React.Component {
	state = {
		title: "",
		id: ""
	};

	createQuizFirebase = dbTitle => {
		db.collection("QG3-Quiz")
			.add({
				title: dbTitle
			})
			.then(docRef => {
				this.props.history.push("/create-quiz-question/" + docRef.id);
			})
			.catch(function(error) {
				console.error(error);
			});
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const dbTitle = this.state.title;
		this.createQuizFirebase(dbTitle);
	};

	render() {
		return (
			<div className="quizcreator-container container mb-4">
				<h1>Create a Quiz</h1>

				<div className="quizcreator-form">
					<form onSubmit={this.handleSubmit}>
						<div className="form-group mb-3">
							<label>Name your quiz:</label>
							<input
								type="text"
								name="title"
								className="form-control"
								placeholder="Enter a title"
								aria-label="Quiztitle input"
								value={this.state.title}
								onChange={this.handleChange}
							/>
							<button type="submit" className="btn btn-secondary mt-3">
								Create your quiz
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default QuizCreator;
