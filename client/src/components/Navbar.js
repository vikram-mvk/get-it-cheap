import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
const Navbar = ({ theme, setTheme }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const modeChangeHandler = () => {
    setTheme(!theme);
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  return (
    <div className="container">
      <StyledNav>
        <Link to="/">
          <Logo>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">
              <g>
                <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" />
                <circle cx="420.9" cy="296.5" r="45.7" />
                <path d="M520.5 78.1z" />
              </g>
            </svg>
            <h2>GetitCheap</h2>
          </Logo>
        </Link>
        <AddWrapper>
          {user ? (
            <>
              <Profile>
                <div className="profileWrap">
                  {user.result.imageUrl ? (
                    <img
                      className="profile-pic"
                      src={user.result.imageUrl}
                      alt={user.result.name}
                    />
                  ) : (
                    <p className="alter-profile-pic">
                      {user.result.name.charAt(0)}
                    </p>
                  )}
                  {user.result.name}

                  <div className="down-arrow">
                    <svg
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 451.847 451.847"
                    >
                      <g>
                        <path
                          d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
                        />
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </div>
                </div>
                <div className="dropdown">
                  <Link to="/your-items">
                    <SLink>Your Items</SLink>
                  </Link>
                  <Link to="/sell">
                    <SLink>For Sale</SLink>
                  </Link>
                  <Link to="/rent">
                    <SLink>For Rent</SLink>
                  </Link>
                  <SLink onClick={logout}>Logout</SLink>
                </div>
              </Profile>
            </>
          ) : (
            <Link to="/auth">
              <PButton>Sign In</PButton>
            </Link>
          )}
          <Mode>
            <label>
              <input type="checkbox" onChange={modeChangeHandler}></input>
              <span className="check"></span>
            </label>
          </Mode>
        </AddWrapper>
      </StyledNav>
    </div>
  );
};

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5em 0;
  a {
    color: inherit;
    text-decoration: none;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 3rem;
    height: 3rem;
    fill: var(--colorPrimary);
  }
`;
const AddWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .profile-pic {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 1em;
  }
  .down-arrow {
    width: 1rem;
    margin: 0 1.5em 0 0.5em;
    display: flex;
  }
  .alter-profile-pic {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--colorPrimary);
    color: #fff;
    font-size: var(--lengthMd2);
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  &:hover .dropdown {
    opacity: 1;
  }
  .profileWrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .dropdown {
    opacity: 0;
    position: absolute;
    top: 55px;
    height: auto;
    width: 100%;
    background: #fff;
    padding: 1em;
    border-radius: 5px;
    z-index: 99;
    transition: opacity 250ms ease-in-out;
  }
`;

const PButton = styled.button`
  font-size: var(--lengthMd1);
  font-weight: 500;
  padding: 0.5em 1.5em;
  background: var(--colorPrimary);
  margin-right: 1em;
  color: #fff;
  border: 0;
  cursor: pointer;
  border-radius: 4px;
  transition: background 300ms ease-in-out;
  &:hover {
    background: #690df3;
  }
`;
const SLink = styled.div`
  display: block;
  width: 100%;
  font-size: var(--lengthMd1);
  padding: 0.5em 1.5em;
  margin-right: 1em;
  color: var(--colorPrimary);
  cursor: pointer;
  border-radius: 4px;
  transition: all 150ms ease-in-out;
  margin-bottom: 1em;
  &:hover {
    background: var(--colorPrimary);
    color: #fff;
  }
`;
const Mode = styled.div`
  margin-left: auto;
  input {
    -webkit-appearance: none;
    visibility: hidden;
    display: none;
    &:checked ~ .check {
      background: var(--colorPrimary);
    }
    &:checked ~ .check:before {
      background: #ffffff;
      transform: translateX(1.65rem);
    }
  }
  .check {
    position: relative;
    display: block;
    width: 3rem;
    height: 1.5rem;
    background: #b9b9b9;
    cursor: pointer;
    border-radius: 1rem;
    overflow: hidden;
    transition: 400ms ease-in;
    &:before {
      content: "";
      position: absolute;
      top: 0.23rem;
      left: 0.2rem;
      background: #fff;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      transition: 400ms;
    }
    &:after {
    }
  }
`;

export default Navbar;
