import React, { Component } from 'react';
import Sidebar from './sidebar';
import {Grid, Button, Row, Thumbnail, Col, Modal, FormGroup, FormControl} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Message extends Component {

	constructor(props){
		super(props)
		this.state = {
			replyModal: false,
			reply: ""
		}
		this.handleShowReplyModal = this.handleShowReplyModal.bind(this)
		this.handleCloseReplyModal = this.handleCloseReplyModal.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	
	handleShowReplyModal(){
		this.setState({replyModal: true})
	}

	handleCloseReplyModal(){
		this.setState({replyModal: false})
	}

	handleChange(e){
		e.preventDefault()
		let name = e.target.name
		let value = e.target.value
		this.setState({[name]: value})
	}

	renderReplyForm(){
		let formBlock = 
			<form>
				<FormGroup>
				<Row>
					<Col md={8}>
					<FormControl
						type="text"
						name="reply"
						value={this.state.reply}
						placeholder="Enter Reply...."
						onChange={this.handleChange}
					/>
					</Col>
					<FormControl.Feedback />
					<Col md={2}>
					 	<Button bsStyle="primary" type="submit">Submit
						<FontAwesome
    						name='paper-plane'
    						/>
						</Button>
					</Col>
					</Row>
				</FormGroup>
			</form>
			return formBlock
	}

	renderReplyDialog(){
		let modalBlock = 
				<Modal show={this.state.replyModal} onHide={this.handleCloseReplyModal}>
					<Modal.Header closeButton>
						<Modal.Title>Message heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h4>User 1</h4>
						<p>
							Message 1
						</p>
						<h4>Company</h4>
						<p>
							Reply to message 1 
						</p>
						{this.renderReplyForm()}
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.handleCloseReplyModal}>Close</Button>
					</Modal.Footer>
				</Modal>
			return modalBlock
	}

	renderMessages(){
		let messageBlock = 
						<Row>
							<Col xs={6} md={4}>
								<Thumbnail>
									<h3>User 1</h3>
									<p>Message 1</p>
									<p>12:30pm </p>
									<p>
										<Button bsStyle="primary" onClick={this.handleShowReplyModal}>Reply</Button>&nbsp;
										<Button bsStyle="default">Delete</Button>
									</p>
								</Thumbnail>
							</Col>
							<Col xs={6} md={4}>
								<Thumbnail>
									<h3>User 2</h3>
									<p>Message 2</p>
									<p>12:30pm </p>
									<p>
										<Button bsStyle="primary">Reply</Button>&nbsp;
										<Button bsStyle="default">Delete</Button>
									</p>
								</Thumbnail>
							</Col>
							<Col xs={6} md={4}>
								<Thumbnail>
									<h3>User 3</h3>
									<p>Message 3</p>
									<p>12:30pm </p>
									<p>
										<Button bsStyle="primary">Reply</Button>&nbsp;
										<Button bsStyle="default">Delete</Button>
									</p>
								</Thumbnail>
							</Col>
						</Row>
					
			return messageBlock
	}

	render(){
		return (
				<div>
					<Sidebar/>
					<Grid>
						{this.renderMessages()}
						{this.renderReplyDialog()}
					</Grid>
				</div>
			)
	}
}


export default Message;