import React from "react";
import "./index.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import MainPage from "./components/pages/mainPage";
import Navbar from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";
import QuizCreator from "./components/makeQuiz/QuizCreator";
import AddQuizQuestion from "./components/makeQuiz/AddQuizQuestion";
import Firstquiz from "./components/makeQuiz/firstquiz";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Navbar />
					<Switch>
						<Route exact path="/" component={MainPage} />
						<Route path="/create-quiz" component={QuizCreator} />

						<Route
							path="/create-quiz-question/:quiz_id"
							component={AddQuizQuestion}
						/>
						<Route path="/Quizrender/:quiz_id" component={Firstquiz} />
					</Switch>

					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
