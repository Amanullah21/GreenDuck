import React from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  add_token_id,
  add_user_name,
  remove_token_id,
  remove_user_name,
} from "../Redux/InitState/action";

import clientId from "../components/CliendId";

const Login = () => {
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    dispatch(add_user_name(res.profileObj));
    dispatch(add_token_id(res.tokenId));
  };
  const onFailure = (res) => {
    console.log("fail", res);
  };
  const LogOutonSuccess = () => {
    dispatch(remove_user_name());
    dispatch(remove_token_id());
  };
  return (
    <div>
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
      <br />
    </div>
  );
};

export default Login;
