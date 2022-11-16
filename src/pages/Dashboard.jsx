import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="welcome">
        <h1>{user.name}</h1>
    </div>
  );
};

export default Dashboard;
