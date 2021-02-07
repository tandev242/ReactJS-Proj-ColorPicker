import React, { Component } from 'react'
import './App.css';
import ColorPicker from './components/ColorPicker'
import SizeSetting from './components/SizeSetting'
import Reset from './components/Reset'
import Result from './components/Result'
class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			color : 'red',
			fontSize : 15
		};
	}
	
	onSetColor = (params) => {
		this.setState({
			color : params
		});
	}

	onChangeFontSize = (value) => {
		if(this.state.fontSize + value > 0 && this.state.fontSize + value <= 30)
            this.setState({
                fontSize : this.state.fontSize + value
			});
	}
	onReset = () =>{
		this.setState({
			color : 'red',
			fontSize : 15
		});
	}
	render() {
		return (
			<div className="container mt-50">
				<div className="row">
					<ColorPicker color = {this.state.color} onReceiveColor={ this.onSetColor } />
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<SizeSetting fontSize = {this.state.fontSize} onChangeFontSize = {this.onChangeFontSize} />
						<Reset onReset = {this.onReset}/>
					</div>
					<Result color = {this.state.color} fontSize = {this.state.fontSize} />
				</div>
			</div>
		);
	}
}
export default App;
