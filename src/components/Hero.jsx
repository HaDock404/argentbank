import styled from "styled-components"
import Image from '../assets/bank-tree.jpeg'

const CardHero = styled.div`
    background-image: url(${Image});
    background-position: 0 -50px;
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
    position: relative;
    @media (min-width: 920px) {
        height: 400px;
        background-position: 0% 33%;
    }
    `

const CardHeroContent = styled.section`
    position: relative;
    top: 2rem;
    width: 200px;
    background: white;
    padding: 2rem;
    text-align: left;
    margin: 0 auto;
    @media (min-width: 920px) {
        position: absolute;
        top: 50px;
        right: 50px;
        width: 300px;
        margin: 2rem;
    }
    `

const CardHeroH2 = styled.h2`
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

const CardHeroP = styled.p`
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
    @media (min-width: 920px) {
        font-size: 1.5rem;
    }`

const CardheroPText = styled.p`
    margin-bottom: 0;
    font-size: 0.9rem;
    @media (min-width: 920px) {
        font-size: 1.2rem;
    }`

function Hero() {
    return (
        <CardHero>
            <CardHeroContent>
                <CardHeroH2>Promoted Content</CardHeroH2>
                <CardHeroP>No fees.</CardHeroP>
                <CardHeroP>No minimum deposit.</CardHeroP>
                <CardHeroP>High interest rates.</CardHeroP>
                <CardheroPText>Open a savings account with Argent Bank today!</CardheroPText>
            </CardHeroContent>
        </CardHero>
    )
}

export default Hero