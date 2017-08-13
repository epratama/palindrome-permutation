import React from "react";
import { render } from "react-dom";
import './css/main.scss';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userInput: '',
			result: false
		};
	}

	doCheck(e) {
		let value = '',
			result = false;

		if(e.target.value !== '') {
			value = e.target.value;
			value = value.replace(/[^0-9a-z]/gi, '').toLowerCase();
			// console.log(value);

			let dict = {},
				counter = 0;

			for(const char of value) {
				dict[char] = typeof dict[char] !== 'undefined' ? dict[char] : 0;
				dict[char]++;
			}

			for(const key in dict) {
				counter += dict[key] % 2;
			}

			result  = counter < 2 ? true : false;
		}

		this.setState({
			userInput: value,
			result: result
		});
	}

	render() {
		let output = '',
			symbol = '';

		if(this.state.userInput !== '') {
			if(this.state.result) {
				output = <div><h2 className="text-success">This is a palindrome</h2><i className="fa fa-check-circle-o fa-5x text-success" aria-hidden="true"></i></div>;
			} else {
				output = <div><h2 className="text-danger">This is not a palindrome</h2><i className="fa fa-times-circle-o fa-5x text-danger" aria-hidden="true"></i></div>;
			}
		}

		return (
			<div>
				<div className="row">
					<div className="col-sm-12">
						<div className="row">
							<div className="col-sm-12">
								<h1>Palindrome Permutation</h1>
							</div>
						</div>

						<div className="row">
							<div className="col-sm-12">
								<div className="form-group">
									<input type="input" className="form-control" id="userInput" placeholder="Please enter the text" onKeyUp={this.doCheck.bind(this)} />
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-sm-12 text-center">
								{output}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById('app'));