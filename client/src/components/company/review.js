import React, { Component } from 'react';
import Sidebar from './sidebar';
import {Grid, Button, Row, Thumbnail, Col, Modal, FormGroup, FormControl, OverlayTrigger, Popover} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Review extends Component {

	constructor(props){
		super(props)
		this.state = {
			showReviewModal: false,
			showMessageModal: false,
			reviewMessage: ""
		}
		this.handleShowReviewModal = this.handleShowReviewModal.bind(this)
		this.handleCloseReviewModal = this.handleCloseReviewModal.bind(this)
		this.handleShowMessageModal = this.handleShowMessageModal.bind(this)
		this.handleCloseMessageModal = this.handleCloseMessageModal.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleShowReviewModal(){
		this.setState({showReviewModal: true})
	}

	handleCloseReviewModal(){
		this.setState({showReviewModal: false})
	}

	handleShowMessageModal(){
		this.setState({showMessageModal: true})
	}

	handleCloseMessageModal(){
		this.setState({showMessageModal: false})
	}


	renderReviewModal(){

		let reviewModalBlock = 
				<Modal show={this.state.showReviewModal} onHide={this.handleCloseReviewModal}>
					<Modal.Header closeButton>
						<Modal.Title>Review Title</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h4>Text in a modal</h4>
						<h6>Date: 2018-01-01 08:30 a.m</h6> 
						<p>
							Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
						</p>
						</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.handleCloseReviewModal}>Close</Button>
					</Modal.Footer>
				</Modal>
			return reviewModalBlock

	}

	handleChange(e){
		e.preventDefault()
		let name = e.target.name
		let value = e.target.value
		this.setState({[name]: value})
	}

	renderMessageForm(){
		let formBlock = 
			<form>
				<FormGroup>
					<FormControl componentClass="textarea"
						type="text"
						name="reviewMessage"
						value={this.state.reply}
						placeholder="Enter Your Message...."
						onChange={this.handleChange}
					/>
					<FormControl.Feedback />
				</FormGroup>
			</form>
			return formBlock

	}

	renderMessageModal(){
		const popover = (
			<Popover id="modal-popover" title="Pranav Puri">
				pranav@codingmart.com
			</Popover>
		);
		let messageModalBlock = 
				<Modal show={this.state.showMessageModal} onHide={this.handleCloseMessageModal}>
					<Modal.Header closeButton>
						<Modal.Title>Send Message</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<OverlayTrigger overlay={popover}>
								<a href="#popover">kybrdbnd</a>
							</OverlayTrigger>
						<p>
							{this.renderMessageForm()}
						</p>
						</Modal.Body>
					<Modal.Footer>
						<Button bsStyle="primary" onClick={this.handleCloseMessageModal}>Submit
						<FontAwesome
    						name='paper-plane'
    						/>
						</Button>
						<Button onClick={this.handleCloseMessageModal}>Close</Button>
					</Modal.Footer>
				</Modal>

			return messageModalBlock

	} 

	renderReviews(){
		let reviewBlock = 
		<Row>
			<Col xs={6} md={4}>
				<Thumbnail src="/thumbnaildiv.png" alt="242x200">
					<h3>Review Title</h3>
					<p>Given By: User 1</p>
					<p>Date: 2018-01-01 08:30 a.m </p>
					<p>Review Description</p>
					<p>
						<Button bsStyle="primary" onClick={this.handleShowMessageModal}>Send Message</Button>&nbsp;
						<Button bsStyle="default" onClick={this.handleShowReviewModal}>Read More</Button>
					</p>
				</Thumbnail>
			</Col>
			<Col xs={6} md={4}>
				<Thumbnail src="/thumbnaildiv.png" alt="242x200">
					<h3>Review Title</h3>
					<p>Given By: User 1</p>
					<p>Date: 2018-01-01 08:30 a.m </p>
					<p>Review Description</p>
					<p>
						<Button bsStyle="primary">Send Message</Button>&nbsp;
						<Button bsStyle="default">Read More</Button>
					</p>
				</Thumbnail>
			</Col>
			<Col xs={6} md={4}>
				<Thumbnail src="/thumbnaildiv.png" alt="242x200">
					<h3>Review Title</h3>
					<p>Given By: User 1</p>
					<p>Date: 2018-01-01 08:30 a.m </p>
					<p>Review Description</p>
					<p>
						<Button bsStyle="primary">Send Message</Button>&nbsp;
						<Button bsStyle="default">Read More</Button>
					</p>
				</Thumbnail>
			</Col>
		</Row>
		return reviewBlock

	}
	render(){
		return (
				<div>
					<Sidebar/>
					<Grid>
						{this.renderReviews()}
						{this.renderReviewModal()}
						{this.renderMessageModal()}
					</Grid>
				</div>
			)
	}
}


export default Review;