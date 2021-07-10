import React from 'react';
import Icon1 from'../../images/svg-4.svg';
import Icon2 from'../../images/svg-5.svg';
import Icon3 from'../../images/svg-6.svg';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';
const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Create a Website</ServicesH2>
                        <ServicesP>We help create a website for you at the most minimal expense.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>App dev</ServicesH2>
                        <ServicesP>We help create a android/iOS application for you at the most minimal expense.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Software Dev</ServicesH2>
                        <ServicesP>We help create a software for you at the most minimal expense.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
