import React, { useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";
import lock from "../images/lock.svg";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signin, signup } from "../redux/actions/auth";
const initState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initState);
  const dispatch = useDispatch();
  const history = useHistory();
  const changeHandler = (e) => {
    if (e.target.value !== "") {
      e.target.classList.add("not-empty");
    } else {
      e.target.classList.remove("not-empty");
    }
    setFormData({ ...formData, [e.target.dataset.label]: e.target.value });
  };
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const switchMode = () => {
    setIsSignup((prev) => !prev);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
    console.log(formData);
  };
  const googleSuccess = async (res) => {
    console.log(res);
    const result1 = res?.profileObj;
    const result = {
      email: result1.email,
      familyName: result1.familyName,
      giveName: result1.givenName,
      imageUrl: result1.imageUrl,
      name: result1.name,
      userId: result1.googleId,
    };
    const token = res?.tokenId;
    console.log(result);
    try {
      dispatch({
        type: "AUTH",
        data: { result, token },
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = (err) => {
    console.log(err);
    console.log("Google Sign In was unsuccessful. Try again.");
  };
  return (
    <div className="container">
      <AuthForm>
        <Title>
          <span>
            <img src={lock} alt="SignIn" />
          </span>
          <h2>{isSignup ? "Sign Up" : "Sign In"}</h2>
        </Title>
        <div className="row">
          {isSignup && (
            <>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                <Input
                  name="First Name"
                  labelName="firstName"
                  autoFocus="true"
                  type="text"
                  changeHandler={changeHandler}
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                <Input
                  name="Last Name"
                  labelName="lastName"
                  autoFocus="false"
                  type="text"
                  changeHandler={changeHandler}
                />
              </div>
            </>
          )}
          <div className="col-lg-12 col-md-12 col-sm-12 mb-2">
            <Input
              name="Email"
              labelName="email"
              autoFocus="true"
              type="email"
              changeHandler={changeHandler}
            />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 mb-2">
            <Input
              name="Password"
              labelName="password"
              autoFocus="false"
              type={showPassword ? "text" : "password"}
              changeHandler={changeHandler}
              handleShowPassword={handleShowPassword}
            />
          </div>

          {isSignup && (
            <div className="col-lg-12 col-md-12 col-sm-12 mb-2">
              <Input
                name="Confirm Password"
                labelName="confirmPassword"
                label="Repeat Password"
                changeHandler={changeHandler}
                type="password"
              ></Input>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <PButton type="submit" onClick={handleSubmit}>
              {isSignup ? "Sign Up" : "Sign In"}
            </PButton>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLEID}
              render={(renderProps) => (
                <PButton
                  className="googleBtn"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 510 510"
                  >
                    <g>
                      <g id="glass">
                        <path
                          fill="#fff"
                          d="M286.875,229.5v63.75h150.45c-15.3,89.25-86.7,153-175.95,153c-104.55,0-191.25-86.7-191.25-191.25
			s86.7-191.25,191.25-191.25c53.55,0,99.45,22.95,132.6,58.65l45.9-45.9c-45.9-45.9-107.1-76.5-178.5-76.5
			c-140.25,0-255,114.75-255,255s114.75,255,255,255s242.25-114.75,242.25-255v-25.5H286.875z"
                        />
                      </g>
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
                  &nbsp; &nbsp;Google Sign In
                </PButton>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
            <SButton onClick={switchMode}>
              {isSignup
                ? "Already have an account? Sign In"
                : "Don't have an account? Sign Up"}
            </SButton>
          </div>
        </div>
      </AuthForm>
    </div>
  );
};

const AuthForm = styled.div`
  max-width: 500px;
  margin: 3em auto;
  padding: 2.5em 2em 2em;
  background: #fff;
  .mb-2 {
    margin-bottom: 2em;
  }
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  span {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: var(--colorPrimary);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
    img {
      width: 3rem;
      height: 3rem;
    }
  }
  h2 {
    margin-bottom: 1em;
  }
`;
const PButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: var(--lengthMd1);
  font-weight: 500;
  padding: 1em 0.5em;
  background: var(--colorPrimary);
  margin-right: 1em;
  color: #fff;
  border: 0;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 1em;
  transition: background 300ms ease-in-out;
  &:hover {
    background: #690df3;
  }
`;

const SButton = styled.button`
  display: block;
  width: 100%;
  font-size: var(--lengthMd1);
  padding: 1em 0.5em;
  cursor: pointer;
  margin-top: 1em;
  border: 0;
`;
export default Auth;
