import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// actions
import { logOutUserFromState } from '../../redux/actions/userAction';

// components
import NewCard from '../NewCard/NewCard.js';

class Nav extends Component {
		constructor(props, context){
      super(props, context);
      this.state = {
       showForm: false
      };

      this.logOut = this.logOut.bind(this);
  }


  // Toggle to Hide and Show Task Form
  operation(){
    this.setState({
      showForm:!this.state.showForm
    });
  }

  // Connect to Server to Call Log Out Route
  xhrLogOut() {
    return new Promise(function(res,rej){
      function reqListener(){
        res(this.responseText);
      }
      let oReq = new XMLHttpRequest();
      oReq.open('GET', '/api/user/logout');
      oReq.addEventListener('load', reqListener);
      oReq.send();
    });
  }

  // Function to log user out
  logOut(event) {
    event.preventDefault();
    this.xhrLogOut()
    .then(() => {
      this.props.onLogOut();
      this.context.router.history.push('/login');
    })
    .catch(err => {
      console.log('error user not logged in', err);
    });
  }

	render() {
		return (
			<div className="Nav">
				<div className="MainHeader">
					<h1>React Kanban</h1>
					<Link to="/login">Log In</Link>
					<Link to="/newuser">Sign Up</Link>
          <a href="#" onClick={this.logOut}>Sign Out</a>
					<div id="addCard" onClick={()=>this.operation()}>
            +
          </div>
				</div>
		 	{
        this.state.showForm?
          <NewCard />
        :null
      }
			</div>
		)
	}

}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => {
      dispatch(logOutUserFromState())
    }
  }
}

Nav.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Nav)