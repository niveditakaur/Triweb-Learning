import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 2.1rem;
    width: 3.5rem;
    height: 3.5rem;
    color: #fff;
    background-color: RGB(150, 120, 220);
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 7rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(0.5rem);
      }
    }
  }

  @media (max-width: 600px) {
    .top-btn {
      right: 0;
      left: 80%;
      bottom: 3rem;
      width: 2.5rem;
      height: 2.5rem;
      font-size: 1.8rem;
    }
  }
`;

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 300;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Wrapper>
      {isVisible && (
        <div className="top-btn" onClick={goTop}>
          <FaArrowUp className="top-btn--icon" />
        </div>
      )}
    </Wrapper>
  );
};

export default GoToTop;
