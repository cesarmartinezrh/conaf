import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";
import Burger from "./Burger";
import Data from "../data/NavBar.json";
import logocnf from "../logocnf.png";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  height: 2.5rem;
  background-color: var(--dark-yellow);
  position: sticky;
  top: 0px;
  z-index: 2;
  box-shadow: 0px 3px 5px rgba(0,0,0,0.5);

  @media (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    display: none;
  }


`;

const LogoLink = styled(NavLink)`
  width: 40%;
`

const Lenk = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  text-decoration: none;
  cursor: pointer;
  height: 100%;
  width: 100%;
  font-size: 14px;

  &:last-child {
    background-color: var(--wine);
  }

  &.active {
    background-color: var(--green);
  }

  &:hover {
    font-weight: 700;
  }

  &.logo {
    background-color: transparent;
    justify-content: start;
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  @media screen and (min-width: 1500px) {
    font-size: 20px;
  }
`;

const DoubleBanner = styled.div`
  position: relative;
  background-color: #fff;
  height: 4rem;
  width: 100%;
  display: grid;
  grid-template-columns: 30% 65% 5%;
  grid-template-rows: 1;
  grid-template-areas: "title logo burger";
  align-items: center;
  padding: 0 15px;
  z-index: 3;
  box-shadow: 0px 0px 10px var(--dark-green);

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    grid-template-columns: 30% 65% 5%;
  }

  @media screen and (min-width: 1024px) {
    height: 6.5rem;
    grid-template-columns: 35% 5% 50%;
    grid-template-areas: "title . logo";
    border-bottom: none;
  }
`;

const Logo = styled.img`
  grid-area: logo;
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 767px) and (max-width: 1024px) {
    height: 3rem;
  }

  @media screen and (min-width: 1024px) {
    height: 5.5rem;
  }
`;

const MainLogo = styled.img`
  grid-area: title;
  height: 2.5rem;

  @media screen and (min-width: 767px) and (max-width: 1024px) {
    height: 3rem;
  }

  @media screen and (min-width: 1024px) {
    height: 5.5rem;
  }
`;

const NavBar = () => {
  return (
    <>
      <DoubleBanner>
        <LogoLink to={"/"}>
          <MainLogo src={logocnf} />
        </LogoLink>
        <Logo src={logo} />
        <Burger />
      </DoubleBanner>
      <Nav>
        {Data.map((e) => (
          <Lenk key={e.id} to={e.to}>
            {e.name}
          </Lenk>
        ))}
      </Nav>
    </>
  );
};

export default NavBar;
