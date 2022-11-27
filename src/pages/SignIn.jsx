import styled from "styled-components"


import Form from "../components/Form"

const Main = styled.main`
    flex: 1;
    background-color: #12002b;
    height: 90vh;
    padding-top: 5rem;
    `

function SignIn() {
    return (
        <Main>
            <Form/>
        </Main>
    )
}

export default SignIn