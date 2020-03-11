import React from "react"; 

class Answer extends React.Component {
render () {
	return (
		<label>
			<input type="radio" name="answers" value={this.props.value} onClick={(e)=>this.props.lagra(e)} />
			{this.props.text}
		</label>
	)}
}

export default Answer