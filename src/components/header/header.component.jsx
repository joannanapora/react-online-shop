import React from 'react';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/plant.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.component.scss';


import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div>
                    :
                    <Link className='option' to='/sign-in'> SING IN </Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />}
    </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);

