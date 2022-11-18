import styled from "styled-components"

import Account from "../components/Account"

const Main = styled.main`
    flex: 1;
    background-color: #12002b;
    height: 90vh;
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

function User() {
    return (
        <Main>
            <HeaderAccount>
                <AccountH1>Welcome back <br/>Tony Jarvis!</AccountH1>
                <EditButton>Edit Name</EditButton>
            </HeaderAccount>
            <CardH2>Accounts</CardH2>
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance"/>
            <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance"/>
            <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance"/>
        </Main>
    )
}

export default User