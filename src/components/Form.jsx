import styled from "styled-components"
import { Link } from "react-router-dom"

const CardSignInContent = styled.section`
    box-sizing: border-box;
    background-color: white;
    width: 300px;
    margin: 0 auto;
    padding: 2rem;
    `

const CardInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;
    `

const CardLabel = styled.label`
    font-weight: bold;
    `

const CardInput = styled.input`
    padding: 5px;
    font-size: 1.2rem;
    `

const CardInputRemember = styled.div`
    display: flex;
    `

const CardLabelRemember = styled.label`
    margin-left: 0.25rem;
    `
const CardButton = styled(Link)`
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    `


function Form() {
    return (
        <CardSignInContent>
            <i class="fa fa-user-circle size"></i>
            <h1>Sign In</h1>
            <form>
                <CardInputWrapper>
                    <CardLabel for="username">Username</CardLabel>
                    <CardInput type="text" id="username"/>
                </CardInputWrapper>
                <CardInputWrapper>
                    <CardLabel for="password">Password</CardLabel>
                    <CardInput type="text" id="password"/>
                </CardInputWrapper>
                <CardInputRemember>
                    <input type="checkbox" id="remember-me"/>
                    <CardLabelRemember for="remember-me">Remember me</CardLabelRemember>
                </CardInputRemember>
                <CardButton to="/user">Sign In</CardButton>
            </form>
        </CardSignInContent>
    )
}

export default Form