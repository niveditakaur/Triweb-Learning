import React from "react";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectModal from "../ProjectDetails";

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0 auto;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: #957186;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 24px;
`;

const CustomCarouselItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertically center the items */
  align-items: center;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Project = styled.div`
  width: 380px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  padding: 18px 36px;
  margin-top: 20px;
  margin-bottom: 25px;
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    align-self: center;
  }

  h2 {
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  Date {
    display: block;
    text-align: left;
    font-size: 15px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_secondary + 80};
    margin-bottom: 5px;
    @media only screen and (max-width: 768px) {
      font-size: 10px;
    }
  }

  Description {
    text-align: left;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    margin-bottom: 15px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
  flex-wrap: nowrap;
  overflow: hidden;
`;

const Tag = styled.span`
  font-size: 15px;
  font-weight: 550;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const CustomCarousel = styled(Carousel)`
  .react-multi-carousel-item {
    padding: 0 15px;
  }
  margin: auto;
`;

const CustomDot = styled.div`
  width: 12px;
  height: 12px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#957186" : "#bbb")};
  cursor: pointer;
`;

const CustomLeftArrow = ({ onClick }) => (
  <Arrow onClick={() => onClick()} style={{ left: 0 }}>
    {"<"}
  </Arrow>
);

const CustomRightArrow = ({ onClick }) => (
  <Arrow onClick={onClick} style={{ right: 0 }}>
    {">"}
  </Arrow>
);

const Projects = ({ project, setOpenModal }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      centerMode: true,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1290 },
      items: 3,
      centerMode: true,
    },
    tablet: {
      breakpoint: { max: 1290, min: 880 },
      items: 2,
      centerMode: true,
    },
    mobile: {
      breakpoint: { max: 880, min: 0 },
      items: 1,
      centerMode: true,
    },
  };

  const proj = projects.map((item) => (
    <CustomCarouselItem key={item.id}>
      <Project
        onClick={() => {
          setSelectedProject(item);
          setOpenModal({ state: true, project: item });
        }}
      >
        <img src={item.image} alt={item.title} />
        <Tags>
          {item.tags?.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
        <h2>{item.title}</h2>
        <date>{item.date}</date>
        <description>{item.description}</description>
      </Project>
    </CustomCarouselItem>
  ));
  return (
    <Container id="projects">
      <Title>Projects</Title>
      <Desc>
        I have worked on a wide range of projects. Explore my diverse portfolio
        of Web apps and Graphic design projects, showcasing a fusion of
        creativity and technology.
      </Desc>
      <CustomCarousel
        responsive={responsive}
        itemClass="react-multi-carousel-item"
        customDot={<CustomDot />}
        showDots
        infinite
        focusOnSelect={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {proj}
      </CustomCarousel>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => {
            setSelectedProject(null);
            setOpenModal({ state: false, project: null });
          }}
        />
      )}
    </Container>
  );
};

export default Projects;
