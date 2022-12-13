import styled from "styled-components"
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { Token, userData, DataUser } from "../pages/Api";
import PostToken from "../pages/Api";

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
const CardButton = styled.button`
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

function Form () {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();

    const handleChange = event => {
        setEmail(event.target.value );
    }
    const handleChange2 = event => {
        setPassword(event.target.value );
    }

    const handleSubmit = event => {
        event.preventDefault();

        const user = {
            email: email,
            password: password
        }

        axios.post("http://localhost:3001/api/v1/user/login", 
                user
            )
            .then (async function(response) {
                const loadingToken = await Token(response)
                if(loadingToken) {
                    const retrievedData = await PostToken(userData.token)
                    if(retrievedData) {
                        console.log(DataUser)
                        localStorage.setItem('firstName', DataUser.data.body.firstName)
                        localStorage.setItem('lastName', DataUser.data.body.lastName)
                        return navigate('/user')
                    }
                }
                
            })
            .catch((err) => console.log(err));
        
     };

        return (
            <CardSignInContent>
                <i className="fa fa-user-circle size"></i>
                <h1>Sign In</h1>
                <form  onSubmit={handleSubmit}>
                    <CardInputWrapper>
                        <CardLabel htmlFor="username">Username</CardLabel>
                        <CardInput type="text" id="username"  onChange={handleChange}/>
                    </CardInputWrapper>
                    <CardInputWrapper>
                        <CardLabel htmlFor="password">Password</CardLabel>
                        <CardInput type="text" id="password"  onChange={handleChange2}/>
                    </CardInputWrapper>
                    <CardInputRemember>
                        <input type="checkbox" id="remember-me"/>
                        <CardLabelRemember htmlFor="remember-me">Remember me</CardLabelRemember>
                    </CardInputRemember>
                    <CardButton type="submit">Sign In</CardButton>
                </form>
            </CardSignInContent>
        )
    
    
}

export default Form