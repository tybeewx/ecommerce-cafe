import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from "./Button";

class Navbar extends Component {
    render() {
        return (<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk */}
            <Link to='/'>
                <img src={logo} alt="store" className="navbar-brand" />
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        products
                    </Link>
                </li>
            <ul className="nav-item ml-6 text-center font-italic">
                <h4>Call us at 386-454-1600</h4>
                <h5>Or visit our cafe in High Springs, FL!</h5>
            </ul>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                        <i className="fas fa-cart-plus" />
                    </span>
                    my cart
                </ButtonContainer>
            </Link>
        </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainTeal);
    border:0.2rem solid rgba(0,0,0,0.2);
        .nav-link{
            color:var(--mainLightTeal) !important;
            font-size: 2.3rem;
            text-transform:capitalize;
        }
        ]

`
export default Navbar;