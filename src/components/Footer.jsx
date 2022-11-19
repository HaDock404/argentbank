import styled from "styled-components"

const CardFooter = styled.footer`
    display: flex;
    justify-content: center;
    border-top: 2px solid #ccc;
    padding: 2rem 0 1.5rem;
    width: 100%;
    background-color: white;
    `

const CardFooterP = styled.div`
    margin: 0;
    padding: 0;
    `

function Footer() {
    return (
        <CardFooter>
            <CardFooterP>Copyright 2020 Argent Bank</CardFooterP>
        </CardFooter>
    )
}

export default Footer