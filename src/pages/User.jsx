import styled from "styled-components"
import Account from "../components/Account"
import { Provider } from 'react-redux';

import store from '../store';
import { ButtonModal } from '../components/SwitchModal';

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

function User(state) {
    const firstName = localStorage.getItem('firstName')
    const lastName = localStorage.getItem('lastName')
    return (
        <Main>
            <HeaderAccount>
                <AccountH1>Welcome back <br/>{firstName} {lastName}!</AccountH1>
                <Provider store={store}>
                    <ButtonModal />
                </Provider>
            </HeaderAccount>
            <CardH2>Accounts</CardH2>
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance"/>
            <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance"/>
            <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance"/>
        </Main>
    )
}

export default User