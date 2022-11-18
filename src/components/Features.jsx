import styled from "styled-components"
import Chat from '../assets/icon-chat.png'
import Money from '../assets/icon-money.png'
import Security from '../assets/icon-security.png'

const CardFeatures = styled.section`
    display: flex;
    flex-direction: column;
    @media (min-width: 920px) {
        flex-direction: row;
    }

    `

const CardFeaturesH2 = styled.h2`
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

const CardFeaturesItem = styled.div`
    flex: 1;
    padding: 2.5rem;
    `

const CardFeaturesH3 = styled.h3`
    color: #222;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    `

const CardFeaturesP = styled.p`
    `

const CardFeatureIcon = styled.img`
    width: 100px;
    border: 10px solid #00bc77;
    border-radius: 50%;
    padding: 1rem;
    `

function Features() {
    return (
        <CardFeatures>
            <CardFeaturesH2>Features</CardFeaturesH2>
            <CardFeaturesItem>
                <CardFeatureIcon src={Chat} alt="Chat Icon"/>
                <CardFeaturesH3>You are our #1 priority</CardFeaturesH3>
                <CardFeaturesP>Need to talk to a representative ? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</CardFeaturesP>
            </CardFeaturesItem>
            <CardFeaturesItem>
                <CardFeatureIcon src={Money} alt="Money Icon"/>
                <CardFeaturesH3>More savings means higher rates</CardFeaturesH3>
                <CardFeaturesP>The more you save with us, the higher your interest rate will be!</CardFeaturesP>
            </CardFeaturesItem>
            <CardFeaturesItem>
                <CardFeatureIcon src={Security} alt="Security Icon"/>
                <CardFeaturesH3>Security you can trust</CardFeaturesH3>
                <CardFeaturesP>We use top of the line encryption to make sure your data and money is always safe.</CardFeaturesP>
            </CardFeaturesItem>
        </CardFeatures>
    )
}

export default Features