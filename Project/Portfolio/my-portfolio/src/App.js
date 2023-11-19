import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Theme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import Hero from "./components/Herosection";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import GoToTop from "./components/GoToTop/GoToTop";
import { BrowserRouter as Router } from "react-router-dom";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      to bottom right,
      rgba(176, 116, 242, 0.5) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      to top left,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  width: 100%;
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
          </Wrapper>
          <Wrapper>
            <Contact />
          </Wrapper>
          <GoToTop/>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
