import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import Account from "../components/Account"
import { userData, DataUser } from "../pages/Api";
import PostToken from "../pages/Api";

const Main = styled.main`
    flex: 1;
    background-color: #12002b;
    height: 105vh;
    `

const AccountH1 = styled.h1`
    margin: 0;
    `

const HeaderAccount = styled.div`
    padding-top: 30px;
    color: #fff;
    margin-bottom: 2rem;
    `

const EditButton = styled.button`
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    font-weight: bold;
    padding: 10px;
    margin-top: 20px;
    `

const CardH2 = styled.h2`
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
let display = 'none'
let color = '#657786'

const CardModale = styled.form`
    width: 300px;
    height: 500px;
    background-color: ${color};
    position: absolute;
    transform-origin: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

const CardInput = styled.input`
    background-color: white;
    width: 80%;
    margin: 10px;
    `

const CardLabel = styled.label`
    font-weight: bold;
    `

const CardSubmit = styled.button`
    width: 50%;
    margin-top: 20px;
    `

function User() {
    const firstName = localStorage.getItem('firstName')
    const lastName = localStorage.getItem('lastName')
    const token = localStorage.getItem('Token');
    const navigate = useNavigate();

    const [state, setState] = useState(false)
    useEffect(() => {
        console.log("click")
        if(state === false) {
            display = 'flex'
        } else {
            display = 'none'
        }
    })


    const [firstname, setFirstname] = useState(`${firstName}`)
    const [lastname, setLastname] = useState(`${lastName}`)

    const handleChange = event => {
        setFirstname(event.target.value );
        display = 'flex'
    }
    const handleChange2 = event => {        
        setLastname(event.target.value );
        display = 'flex'
    }

    const handleSubmit = event => {
        event.preventDefault();

        const user = {
            firstName: firstname,
            lastName: lastname
        };

        const headers = {
            accept: "application/json",
            Authorization: "Bearer " + token
        }

        axios.put("http://localhost:3001/api/v1/user/profile", user,
            {
            headers
            })
            .then (async function(response) {  
                const retrievedData = await PostToken(userData.token)
                if(retrievedData) {
                    console.log(DataUser)
                    localStorage.setItem('firstName', DataUser.data.body.firstName)
                    localStorage.setItem('lastName', DataUser.data.body.lastName)
                    return navigate('/user')
                }
                              
            })
            .catch((err) => console.log(err));
        
     };

    return (
        <Main>
            <CardModale   onSubmit={handleSubmit} style={{display: `${display}`}}>
                <CardLabel htmlFor="firstName">FirstName</CardLabel>
                <CardInput value={`${firstname}`} id="firstID" onChange={handleChange}/>
                <CardLabel htmlFor="firstName">LastName</CardLabel>
                <CardInput value={`${lastname}`} onChange={handleChange2}/>
                <CardSubmit type="submit" onClick={() => setState(!state)}>Confirmer</CardSubmit>
            </CardModale>
            <HeaderAccount>
                <AccountH1>Welcome back <br/>{firstName} {lastName}!</AccountH1>
                <EditButton onClick={() => setState(!state)}>Edit Name</EditButton> 
            </HeaderAccount>
            <CardH2>Accounts</CardH2>
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance"/>
            <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance"/>
            <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance"/>
        </Main>
    )
}

export default User