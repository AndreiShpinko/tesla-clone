import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = (props) => {
  const {
    title,
    description,
    backgroundImg,
    leftBtnText,
    rightBtnText,
    downArrow,
  } = props;
  return (
    <Wrap bgImage={process.env.PUBLIC_URL + "/images/" + backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <ButtonGroup mbSize={downArrow}>
          <Fade left>
            <LeftButton>{leftBtnText}</LeftButton>
          </Fade>
          <Fade right>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </Fade>
        </ButtonGroup>
        {downArrow && (
          <DownArrow
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/down-arrow.svg`}
              alt="down arrow"
            />
          </DownArrow>
        )}
      </Buttons>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url("${(props) => props.bgImage}");
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  p {
    margin-top: 10px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: ${(props) => (props.mbSize ? "30px" : "110px")};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.9;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.div`
  margin: 20px 0;
  width: 40px;
  height: 40px;
  animation: animateDown infinite 1.5s;
  cursor: pointer;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Section;
