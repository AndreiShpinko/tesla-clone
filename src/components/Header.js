import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  const scrollToSection = (e, amountSections) => {
    e.preventDefault();
    window.scrollTo({
      top: window.innerHeight * amountSections,
      behavior: "smooth",
    });
  };

  const MenuItems = [
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
    "Solar Roof",
    "Solar Panels",
  ];

  const BurgerItems = [
    "Existing Inventory",
    "Used Inventory",
    "Trade-in",
    "Cybertrack",
    "Roadster",
    "Semi",
    "Charging",
    "Powerwall",
    "Commercial Energy",
    "Utilities",
    "Find Us",
    "Support",
    "Investor Relations",
  ];

  return (
    <Container>
      <Logo href="#" onClick={(e) => scrollToSection(e, 0)}>
        <svg viewBox="0 0 342 35" style={{ width: "120px" }}>
          <path
            d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z"
            fill="currentColor"
          ></path>
        </svg>
      </Logo>

      <Menu>
        {MenuItems.map((item, i) => {
          return (
            <a
              href="#"
              onClick={(e) => scrollToSection(e, i)}
            >
              {item}
            </a>
          );
        })}
      </Menu>

      <RightMenu>
        <a href="https://www.tesla.com/">Shop</a>
        <a href="https://www.tesla.com/">Account</a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setBurgerStatus(true);
          }}
        >
          Menu
        </a>
      </RightMenu>

      <Backdrop
        className={burgerStatus ? "active" : ""}
        onClick={() => setBurgerStatus(false)}
      />

      <BurgerNav show={burgerStatus}>
        <CloserWrapper>
          <CloserIcon
            onClick={(e) => {
              e.preventDefault();
              setBurgerStatus(false);
            }}
          >
            <svg viewBox="0 0 24 24">
              <path
                d="M18.53 17.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.748.748 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L10.94 12 5.47 6.53a.75.75 0 1 1 1.06-1.06L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47z"
                fill="currentColor"
              ></path>
            </svg>
          </CloserIcon>
        </CloserWrapper>
        <BurgerList>
          {BurgerItems.map((item) => {
            return (
              <li>
                <a href="https://www.tesla.com/">{item}</a>
              </li>
            );
          })}
        </BurgerList>
      </BurgerNav>
    </Container>
  );
};

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding 0 20px;
top: 0;
right: 0;
left: 0;
z-index: 20;
`;

const Logo = styled.a`
  margin-right: 130px;
  @media (max-width: 1200px) {
    margin: 0;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    padding: 6px 16px;
    transition: 0.3s;
    @media (hover: hover) {
      &:hover {
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  a {
    font-weight: 600;
    padding: 6px 16px;
    transition: 0.3s;
    @media (hover: hover) {
      &:hover {
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
    &:not(:last-child) {
      @media (max-width: 1200px) {
        display: none;
      }
    }
    &:last-child {
      @media (max-width: 1200px) {
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 1000;
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: transform 0.2s;
  transform: ${(props) => (props.show ? "translate(0)" : "translate(100%)")};
  li {
    padding: 5px 0;
    a {
      display: block;
      font-weight: 400;
      padding: 6px 16px;
      transition: 0.3s;
      @media (hover: hover) {
        &:hover {
          border-radius: 10px;
          background-color: rgba(0, 0, 0, 0.05);
        }
      }
    }
  }
`;

const BurgerList = styled.ul`
  list-style: none;
  padding: 5px 30px;
`;

const CloserWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  svg {
    width: 24px;
  }
`;

const CloserIcon = styled.button`
  border: none;
  outline: none;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  font-size: 0;
  transition: 0.3s;
  padding: 7px;
  @media (hover: hover) {
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

const Backdrop = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  backdrop-filter: blur(4px);
  opacity: 0;
  visibility: hidden;
  z-index: 10;
  transition: opacity 0.3s;
  &.active {
    opacity: 1;
    visibility: visible;
  }
`;
export default Header;
