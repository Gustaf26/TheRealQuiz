import React from "react";
import { db } from "../fireStore/firebase";


class mainPage extends React.Component {
	state = {
		Quizes: [],
		Actualquiz: ""
	};
	
	componentDidMount() {
		db.collection("QG3-Quiz")
			.get()
			.then(doc => {
				doc.forEach(doc => {
					this.nyQuiz(doc.id, doc.data().title);
				});
			})
			.catch(err => {
				console.error(err);
			});
	}

	nyQuiz = (id, title) => {
		let tommaquiz = [];
		let obj = {};
		obj.realid = id;
		obj.realtitle = title;
		tommaquiz = [...this.state.Quizes, obj];
		this.setState({ Quizes: tommaquiz });
	};

	getQuiz = id => {
		this.props.history.push("./Quizrender/" + id);
	};

	render() {
		const NewQuizes = this.state.Quizes.map((obj, index) => {
			const i = obj.realid;
			return (
				<div className="col-md-6 col-lg-4" key={index}>
					<div className="card">
						<div className="text-center card-body">
							<h3 className="card-title">{obj.realtitle}</h3>
							<p className="quiz-icon"><span role="img" aria-label="dice icon">🎲</span></p>
							<button
								className="btn btn-secondary"
								onClick={() => {this.getQuiz(i);}}> 
									Take Quiz
							</button>
						</div>
					</div>
				</div>
			);
		});

		return (
			<div className="container">
				<div className="content">
					<h1 className="mb-5">The Quiz App</h1>
					<div className="card-deck">
							{NewQuizes}
						</div>
					</div>
				</div>
		);
	}
}

export default mainPage;
