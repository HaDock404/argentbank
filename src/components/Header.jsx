import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from '../assets/argentBankLogo.png'

export const loginX = 'In'

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
    
    const token = localStorage.getItem('Token')
    let login = ''

      if (token !== null) {
        login = 'Out'
      } else if (token === null) {
        login = 'In'
      }
   
    const setLogin = () => {
        if (token !== null) {
            login = 'In'
            localStorage.clear()
          } else if (token === null) {
            login = 'In'
          }
    }

    return (
        <MainNav>
            <HomeLink to="/">
                <HomeImage src={Logo} alt="Argent Bank Logo"/>
                <CardTitle/>
            </HomeLink>
            <SignInLink onClick={setLogin} to="/sign-in">
                <i className="fa fa-user-circle margin"></i>
                Sign {login}
            </SignInLink>
        </MainNav>
    )
}

export default Header