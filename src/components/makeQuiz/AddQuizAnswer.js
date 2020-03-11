import React from 'react'

class AddQuizAnswer extends React.Component {

	state = {
		defaultSelect: '',
	}

	deleteAnswer = (e, i) => {
		e.preventDefault()
		const answers = this.props.answers;
		answers.splice(i, 1);
		this.setState({
			answers
		});
	}

	handleAddInputClick = e => {
		e.preventDefault()
		const answers = this.props.answers
		answers.push("")

		this.setState({
			answers,
		})
	}

	handleInputChange = (e, i) => {
		const answers = this.props.answers
		answers[i] = e.target.value

		this.setState({
			answers,
		})
	}

	render() {
		return (
			<div>
			{
				this.props.answers.map((answer, i) => (
					<div id="answer-inputs" className="input-group mb-3" key={i}>
							<input 
								type="text" 
								name="answer" 
								className="form-control" 
								placeholder="Enter an answer" 
								value={answer} 
								onChange={e => {this.handleInputChange(e, i)}} />
						<div className="input-group-append">
							<button className="btn btn-secondary" onClick={(e) => {this.deleteAnswer(e, i)}}> 
								x
							</button>
						</div>
					</div>
				))
			}

			<button className="btn btn-secondary" onClick={this.handleAddInputClick}>+</button>

			<div className="form-group">
				<p>Please select the correct answer:</p>
					<select 
						name="correctAnswer" 
						className="form-control" 
						value={this.props.correctAnswer}
						onChange={this.props.handleChange}>
							<option disabled="disabled" value="">Choose correct answer</option>
							{
								this.props.answers.map((answer, i) => (
									<option value={answer} key={i}>{answer}</option>
								))
							}
				</select>
			</div>
		</div>
		)
	}
}

export default AddQuizAnswer