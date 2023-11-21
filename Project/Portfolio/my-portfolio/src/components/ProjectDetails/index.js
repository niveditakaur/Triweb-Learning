import { Modal } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Title = styled.div`
   {
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
`;

const Image = styled.img`
   {
    width: 100%;
    height: 450px;
    object-fit: cover;
    margin: 0 auto;
    display: block;
    margin-bottom: 10px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
  }
`;

const Date = styled.div`
   {
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
`;

const Description = styled.div`
   {
    text-align: left;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
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
`;

const Tag = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`;

const Button = styled.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  ${({ dull, theme }) =>
    dull &&
    `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary + 99};
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const ProjectModal = ({ project, onClose }) => {
  const handleContainerClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
    event.stopPropagation();
  }; 
  return (
    <Modal open={Boolean(project)} onClose={onClose}>
      <Container onClick={handleContainerClick}>
        <Wrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={onClose}
          />

          <Image src={project?.image} alt={project?.title} />
          <Tags>
            {project?.tags?.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>
          <Title>{project?.title}</Title>
          <Date>{project?.date}</Date>
          <Description>{project?.description}</Description>

          <ButtonGroup>
            <Button dull href={project?.github} target="_blank">
              View Code
            </Button>
            <Button href={project?.webapp} target="_blank">
              View Live App
            </Button>
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectModal;
