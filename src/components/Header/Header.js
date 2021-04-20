import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

const Header = ({cartLength}) => {

    return (
	
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Mobile Portal</NavLink>
                <div>
                    <ul className="navbar-nav ml-auto">
					<li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                                <span className="sr-only">(current)</span>
                            
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/cart"}><i className="fa fa-shopping-cart mr-2"
                                                                          aria-hidden="true" />Cart {cartLength ? `(${cartLength})`: ''}</NavLink>
                        </li>
						<li className="nav-item">
                            <NavLink className="nav-link" to={"/Login"}><i aria-hidden="true" />Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};


const mapStateToProps = (state) => {
  return {
      cartLength: state.shop.cart.length
  }
};

export default connect(mapStateToProps, null)(Header);


                        
