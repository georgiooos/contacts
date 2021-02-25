import React,{Fragment,useContext} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({title,icon}) => {
    const authContext=useContext(AuthContext);

    const {isAuthenticated,logout,user}=authContext;

    const onLogout=()=>{
        logout();
    }

    const authLinks=(
        <Fragment>
            <li>hello {user&&user.name}</li>
            <li>
                <a onClick={onLogout} href="#!">
                    <i className="fas fa-sign-out-alt"></i>
                    <span className="hide-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    );

    const guestLinks=(
        <Fragment>
                <i>
                    <Link to='/'>Home</Link>
                </i>
                <i>
                    <Link to='/about'>About</Link>
                </i>
                <i>
                    <Link to='/register'>Register</Link>
                </i>
                <i>
                    <Link to='/login'>Login</Link>
                </i>
        </Fragment>
    );

    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={icon}/>{title}
            </h1>
            <ul>
                {isAuthenticated?authLinks:guestLinks}
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defaultProps = {
    title:'Contact Keeper',
    icon: 'fas fa-id-card-alt'
}

export default Navbar
