import React, { Component } from 'react';

class List extends Component {
	state = {
		numbers: [1,2,3],
	}


	addArr = () => {
		const randomNum = Math.floor(Math.random() * 10);
		this.setState({
			numbers: [...this.state.numbers, randomNum]
		})
	}

	componentDidMount(){
		console.log('Компонент был отображен!');
	}
	componentDidUpdate(prevProps,prevState){
		console.log(prevState,this.state);
	}

	componentWillUnmount(){
		console.log('Компонент будет удален!');
	}

	render() {
		return (
			<>
				<ul>
					test
					{this.state.numbers.map((num, i) => (   
						<li key={i}>{num}</li>
					))}
				</ul>
				<button onClick={this.addArr}>Новое число</button>
			</>
		);
	}
}

export default List;