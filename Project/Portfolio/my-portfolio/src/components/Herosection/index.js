import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroBottomContainer = styled.div`
  width: 100%;
  order: 2;
  align-items: center;
  text-align: center;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroTopContainer = styled.div`
  width: 100%;
  display: flex;
  order: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
  }

  @media (max-width: 640px) {
    margin-bottom: 5px;
  }
`;

const ImgWithBorder = styled.div`
  position: relative;
  width: 270px;
  height: 270px;
  border-radius: 50%;
  margin-top: -30px;

  &:before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    width: 100%;
    height: 100%;
    background-color: white;
    border: 5px solid ${({ theme }) => theme.primary + 95};
    border-top-left-radius: 90%;
    border-top-right-radius: 100%;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 90%;
    animation: rotateBorder 3s linear infinite;
    transform-origin: center;
  }

  @keyframes rotateBorder {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Img = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 270px;
  max-height: 270px;
  border-radius: 50%;

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 30px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  margin-left: 30px;
`;

const SocialLink = styled.a`
  font-size: 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  margin: 8px;
  svg {
    width: 24px;
    height: auto;
    margin-right: 6px;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 960px) {
    font-size: 14px; 
  }

  @media (max-width: 640px) {
    font-size: 12px;
    margin: 4px; 
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const BioName = styled.span`
  color: ${({ theme }) => theme.primary};
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.white};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: linear-gradient(
    225deg,
    #d198c5,
    #957186
  ); 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 
  text-transform: uppercase;
  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3); 
    filter: brightness(1.1);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

const WavingHand = styled.span`
  display: inline-block;
  animation: waving 2s infinite;
  transform-origin: 70% 70%;

  @keyframes waving {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer>
          <HeroBottomContainer id="Bottom">
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="display">
              Check Résumé
            </ResumeButton>
          </HeroBottomContainer>
          <HeroTopContainer id="Top">
            <ImgWithBorder>
              <Img
                src="https://drive.google.com/uc?id=121aFVfRGe4ghpevBZ5yk3ofC7xbAsA1L"
                alt="hero-image"
              />
            </ImgWithBorder>
            <Title>
              &nbsp; &nbsp; Hi! I'm &nbsp;
              <BioName>{Bio.name}</BioName>
              &nbsp;
              <WavingHand>👋🏼</WavingHand>
              <SocialMedia>
                <SocialLink
                  href="https://www.linkedin.com/in/niveditakaur/"
                  target="display"
                >
                  <LinkedInIcon />
                  <span>/niveditakaur</span>
                </SocialLink>{" "}
                &nbsp; &nbsp;
                <SocialLink
                  href="https://twitter.com/NiveditaKaur"
                  target="display"
                >
                  <TwitterIcon />
                  <span>/NiveditaKaur</span>
                </SocialLink>{" "}
                &nbsp; &nbsp;
                <SocialLink
                  href="https://leetcode.com/niveditakaurr/"
                  target="display"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="leetcode"
                  >
                    <path d="M20.303 16.047h-9.561c-.936 0-1.697-.803-1.697-1.79s.762-1.79 1.697-1.79h9.561c.936 0 1.697.803 1.697 1.79s-.762 1.79-1.697 1.79zm-9.561-2.58c-.385 0-.697.354-.697.79s.312.79.697.79h9.561c.385 0 .697-.354.697-.79s-.312-.79-.697-.79h-9.561z"></path>
                    <path d="M11.618 24c-1.604 0-2.977-.533-3.97-1.541L3.55 18.278C2.551 17.262 2 15.819 2 14.215c0-1.578.551-3.008 1.552-4.025L13.071.509c.66-.67 1.829-.652 2.506.036.694.706.71 1.839.034 2.524l-1.762 1.816a5.25 5.25 0 0 1 1.739 1.159l2.463 2.53c.672.684.655 1.815-.039 2.521a1.79 1.79 0 0 1-1.284.545c-.464 0-.896-.181-1.219-.509l-2.536-2.492c-.321-.327-.779-.49-1.367-.49-.606 0-1.069.157-1.375.469l-4.067 4.194c-.342.349-.521.831-.521 1.4 0 .577.189 1.101.519 1.436l4.083 4.182c.315.321.774.484 1.362.484s1.045-.163 1.36-.484l2.549-2.505a1.687 1.687 0 0 1 1.209-.503h.002c.483 0 .939.194 1.286.546.693.705.71 1.837.036 2.522l-2.457 2.525C14.586 23.438 13.176 24 11.618 24zM14.29 1a.703.703 0 0 0-.507.21l-9.519 9.681C3.449 11.72 3 12.9 3 14.215c0 1.341.449 2.535 1.265 3.363l.001.001 4.097 4.18C9.162 22.57 10.288 23 11.618 23c1.288 0 2.444-.455 3.258-1.282l2.457-2.525c.295-.301.279-.804-.034-1.122a.801.801 0 0 0-.573-.247h-.001a.703.703 0 0 0-.502.209l-2.549 2.505c-.497.507-1.214.778-2.068.778s-1.572-.271-2.076-.784L5.446 16.35c-.519-.527-.805-1.286-.805-2.136 0-.824.286-1.57.806-2.099l4.067-4.194c.503-.512 1.206-.771 2.091-.771.854 0 1.571.271 2.074.783l2.536 2.492a.705.705 0 0 0 .512.216.798.798 0 0 0 .571-.246c.313-.319.33-.822.037-1.121l-2.461-2.528a4.238 4.238 0 0 0-2.028-1.137c-.175-.041-.331-.176-.382-.349s-.021-.363.104-.492l2.325-2.398c.298-.302.282-.805-.031-1.124A.799.799 0 0 0 14.29 1z"></path>
                  </svg>
                  <span>/niveditakaurr</span>
                </SocialLink>
              </SocialMedia>
            </Title>
          </HeroTopContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default Hero;
