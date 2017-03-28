'use strict';

import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class IndexPage extends React.Component {
	constructor(){
		super();
		this.state = {
			data: ""
		}
		this.handleData = this.handleData.bind(this);
		this.makeCall = this.makeCall.bind(this);
	}

	handleData(event) {
		this.setState({
			data : event.target.value,
		});
		console.log(event.target.value);
	}

	makeCall(){
		return $.ajax({
			contentType: 'application/json',
			type: "POST",
			url: "http://localhost:4000/",
			data: JSON.stringify({data : this.state.data})
		});
	}

	render() {
		return (
			<div className="home">
				<Card>
					<CardTitle title="Card title"/>
					<CardText>
						Welcome to the online app connect to our project! Enter the ingredients you want with commas in between.
						i.e. lettuce, mustard
					</CardText>
					<CardActions>
						<div style={{"paddingLeft":"10px"}}>
							<TextField
							hintText="Ingredients"
							floatingLabelText="Ingredients"
							onChange={this.handleData}
						/>
						<br />
					</div>
						<FlatButton label="Submit" onClick={this.makeCall}/>
					</CardActions>
				</Card>
			</div>
		);
	}
}
