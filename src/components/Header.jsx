import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from '../assets/argentBankLogo.png'

const MainNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
`

const HomeLink = styled(Link)`
    font-weight: bold;
    color: #2c3e50;
    `

const SignInLink = styled(Link)`
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin-right: 0.5rem;
    font-size: 16px;
    :hover{
        text-decoration: underline;
    }`

const HomeImage = styled.img`
    max-width: 100%;
    width: 200px;
    `

const CardTitle = styled.h1`
    border: 0 !important;
    clip: rect(1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
    `

function Header() {
    return (
        <MainNav>
            <HomeLink to="/">
                <HomeImage src={Logo} alt="Argent Bank Logo"/>
                <CardTitle/>
            </HomeLink>
            <SignInLink to="/sign-in">
                <i class="fa fa-user-circle margin"></i>
                Sign In
            </SignInLink>
        </MainNav>
    )
}

export default Header