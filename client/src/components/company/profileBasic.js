import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { Button, Row, Col, FormGroup, ControlLabel } from 'react-bootstrap';
import TimePicker from 'react-bootstrap-time-picker';



class ProfileBasic extends Component {

    constructor(props) {
        super(props)
        this.state = {
            "opening_time": this.props.profile['extra_info']['opening_time'],
            "closing_time": this.props.profile['extra_info']['closing_time']
        }
        this.handleOpeningTime = this.handleOpeningTime.bind(this)
        this.handleClosingTime = this.handleClosingTime.bind(this)
        this.updateCompanyProfile = this.updateCompanyProfile.bind(this)
    }

    handleOpeningTime(time) {
        this.setState({ opening_time: time })
    }

    handleClosingTime(time) {
        this.setState({ closing_time: time })
    }

    updateCompanyProfile(e) {
        e.preventDefault()
        let form_data = {
            extra_info: {
                "opening_time": this.state.opening_time,
                "closing_time": this.state.closing_time
            }
        }
        this.props.updateCompanyProfile(form_data)
    }

    renderBasicDetails(){
    	let company_form =
			<div>
				<form onSubmit={this.updateCompanyProfile}>
					<FormGroup>
						<Row>
							<Col md={4}>
								<ControlLabel htmlFor="opening_time">Opening Time</ControlLabel>
		          				<TimePicker format={24} onChange={this.handleOpeningTime} step={30} value={this.state.opening_time}/>
		          			</Col>
		          			<Col md={4}>
		          				<ControlLabel htmlFor="closing_time">Closing Time</ControlLabel>
		          				<TimePicker format={24} onChange={this.handleClosingTime} step={30} value={this.state.closing_time}/>
		          			</Col>
	          			</Row>
	          		</FormGroup>
					<Button bsStyle="info" type="submit">Save</Button>
				</form>
			</div>
			return company_form

    }

    render() { return (this.renderBasicDetails()) }
}

export default ProfileBasic;