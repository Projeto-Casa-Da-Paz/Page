'use client'
import Link from "next/link";
import styled from "styled-components"


export const NavbarContainer = styled.nav`
    width: 100%;
    height: 80px;
    background-color: var(--black);
    display: flex;
    flex-direction: column;

`;


export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #ccc;
  font-size: 45px;
  cursor: pointer;

  :hover {
    color: var(--white);
  }

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 700px) {
      display: none;
    }
`;


export const NavbarLink = styled(Link)`
  color: var(--text-title);
  font-size: large;
  text-decoration: none;
  margin: 10px;

  :hover {
    color: var(--white);
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: var(--white);
  font-size: large;
  text-decoration: none;
  margin: 10px;

  &:hover {
    color: var(--red);
  }
`;

