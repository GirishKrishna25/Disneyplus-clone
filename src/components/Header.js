import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

export default function Header() {
  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => console.log(result))
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src="/images/home-icon.svg" alt="HOME" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="SEARCH" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="ORIGINALS" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="MOVIES" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="SERIES" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <Login onClick={handleAuth}>Login</Login>
    </Nav>
  );
}

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  padding: 0 36px;
  letter-spacing: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 3;
`;

const Logo = styled.a`
  display: inline-block;

  width: 80px;
  max-height: 70px;
  padding: 0;

  margin-top: 4px;

  img {
    display: block;
    width: 100%;
  }
`;

const Login = styled.a`
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
  transition: all 0.2s ease;
`;

const NavMenu = styled.div`
  margin: 0;
  padding: 0;

  margin-right: auto;
  margin-left: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  height: 100%;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      width: 20px;
      min-width: 20px;
      height: 20px;
      z-index: auto;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      position: relative;
      color: rgb(249, 249, 249);
      white-space: nowrap;

      &:before {
        content: "";
        width: auto;
        height: 2px;

        position: absolute;
        left: 0px;
        right: 0px;
        bottom: -6px;

        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;

        opacity: 0;

        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
