import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

const init = {
  user_name: "",
  password: "",
};
function Form(props) {
  const [data, setData] = useState(init);

  // onchange input handle
  const inputhandle = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  //onclick button handle
  const submitBtn = () => {
    if (data.user_name === "") {
      alert("Enter User name");
    } else if (data.password === "") {
      alert("Enter Password");
    } else {
      console.log(data);
    }
  };
  return (
    <div>
      <Input
        placeholder="User Name"
        onChange={inputhandle}
        name="user_name"
        value={data.user_name}
      />
      <Input
        required
        type="password"
        name="password"
        // type={pass}
        placeholder="Password"
        onChange={inputhandle}
        value={data.password}
      />
      <Button onClick={submitBtn}>{props.btn}</Button>
    </div>
  );
}

export default Form;
