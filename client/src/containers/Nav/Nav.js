import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// components
import NewCard from '../NewCard/NewCard.js';

class Nav extends Component {
		constructor(props){
      super(props);
      this.state = {
       showForm: false
      };
  }


  // Toggle to Hide and Show Task Form
  operation(){
    this.setState({
      showForm:!this.state.showForm
    });
  }

	render() {
		return (
			<div className="Nav">
				<div className="MainHeader">
					<h1>React Kanban</h1>
					<Link to="/login">Log In</Link>
					<Link to="/newuser">Sign Up</Link>
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

export default Nav;