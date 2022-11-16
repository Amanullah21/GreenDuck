import React from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import styled from "../style/login.module.css";
import Form from "./Components/Form";
import clientId from "../components/CliendId";
import { useDispatch, useSelector } from "react-redux";
import {
  add_token_id,
  add_user_name,
  remove_token_id,
  remove_user_name,
} from "../Redux/InitState/action";
import { useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Register = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const onSuccess = (res) => {
    dispatch(add_user_name(res.profileObj));
    dispatch(add_token_id(res.tokenId));
    console.log(res)
  };
  const onFailure = (res) => {
    console.log("fail", res);
  };
  const LogOutonSuccess = () => {
    dispatch(remove_user_name());
    dispatch(remove_token_id());
  };
  // console.log(user.imageUrl);
  return (
    <div className={styled.login_container}>
      <div className={styled.login}>
        <h1>Sign Up</h1> <br />
        <br />
        <Form btn="Sign Up" />
        <br />
        <div className={styled.google_button}>
          <GoogleLogin
            clientId={clientId}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          ></GoogleLogin>
          <GoogleLogout
            clientId={clientId}
            onLogoutSuccess={LogOutonSuccess}
          ></GoogleLogout>
        </div>
        <div className={styled.social_button}>
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
          <FaInstagram />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Register;
