'use client';

import styled from 'styled-components';
import Image from 'next/image';
import ContainerLayout from './ContainerLayout';
import { DesktopContainer, TabletContainer, device } from '@/theme/breakpoints';

const SectionWrapper = styled.div`
  min-height: 900px;
  height: 100vh;
`;

const SectionBackground = styled.div<{ $url: string; $urlMobile: string }>`
  background-image: ${({ $url }) => `url(${$url})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  @media ${device.sm} {
    background-image: ${({ $urlMobile }) => `url(${$urlMobile})`};
  }
`;

const StyledContent = styled.div`
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  min-height: 900px;
  height: 100vh;
`;

const StyledHeading = styled.h1`
  font-size: 80px;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: 300;
  @media ${device.sm} {
    font-size: 50px;
  }
`;

const StyledText = styled.p`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 300;
  &:last-of-type {
    margin-bottom: 30px;
  }
  @media ${device.sm} {
    font-size: 25px;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 500px;
    height: 500px;
  }
  @media ${device.sm} {
    img {
      width: 250px;
      height: 250px;
    }
  }
`;

const ComingSoon = () => {
  return (
    <SectionWrapper>
      <SectionBackground
        $url="/comingSoon.jpg"
        $urlMobile="/comingSoonMobile.jpg"
      >
        <ContainerLayout>
          <StyledContent>
            <StyledHeading>Coming soon</StyledHeading>
            <DesktopContainer>
              <StyledText>We make it simple. We make it beautiful.</StyledText>
            </DesktopContainer>
            <TabletContainer>
              <StyledText>We make it simple.</StyledText>
              <StyledText>We make it beautiful.</StyledText>
            </TabletContainer>
            <ImageWrapper>
              <Image src="/logo.png" width={300} height={300} alt="logo" />
            </ImageWrapper>
          </StyledContent>
        </ContainerLayout>
      </SectionBackground>
    </SectionWrapper>
  );
};

export default ComingSoon;
