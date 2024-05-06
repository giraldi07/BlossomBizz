import React, { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: #fff;
  background-color: rgba(31, 31, 31, 0.1);
  z-index: 9999;
`;

const Logo = styled.img`
  width: 200px;
  height: 50px;
  margin-right: 20px;
  margin-left: 60px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 114px;
    height: 30px;
    margin-left: 10px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 768px) {
    display: none; /* menyembunyikan Nav saat mode mobile aktif */
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 60px;
  transition: color 0.2s ease;

  &:hover {
    color: red;
  }

  @media (max-width: 768px) {
    margin-right: 25px;
    margin-top: 25px;
    text-align: center;
  }
`;

const MobileNav = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    z-index: 999;
    background-color: rgba(31, 31, 31, 0.5);
    backdrop-filter: blur(10px);
    padding: 20px;

    position: fixed;
    top: ${(props) => (props.open ? "71px" : "-100%")};

    transition: top 0.3s ease;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    left: 0px;
    flex-direction: column; /* Mengatur tata letak vertikal */
  }

  /* Efek hover */
  a {
    color: #fff;
    text-decoration: none;
    margin-bottom: 10px;
    transition: color 0.2s ease;
  }

  a:hover {
    color: red;
    font-weight: bold;
  }
`;

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  // Menambahkan definisi MobileMenuButton di dalam komponen Header
  const MobileMenuButton = styled.button`
    display: none;
    @media (max-width: 768px) {
      display: block;
      border: none;
      color: white;
      background-color: transparent;
      padding: 10px;
      font-size: 24px;
      cursor: pointer;
      margin-right: 25px;
    }
  `;

  return (
    <HeaderContainer>
      <NavLink href="/">
        <Logo src="./images/logonav.png" alt="Logo" />
      </NavLink>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/About">About</NavLink>
        <NavLink href="/Teams">Teams</NavLink>
        <NavLink href="/Partner">Partner</NavLink>
      </Nav>
      {/* Gunakan MobileMenuButton yang sudah didefinisikan */}
      <MobileMenuButton onClick={toggleNav}>&#9776;</MobileMenuButton>
      <MobileNav open={openNav}>
        {" "}
        {/* Menggunakan properti open untuk mengatur nilai top */}
        <NavLink href="/">Home</NavLink>
        <NavLink href="/About">About</NavLink>
        <NavLink href="/Teams">Teams</NavLink>
        <NavLink href="/Partner">Partner</NavLink>
      </MobileNav>
    </HeaderContainer>
  );
};

export default Header;
