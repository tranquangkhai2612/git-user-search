import React from "react";
import { Info, User, Search, Navbar, ListRepos } from "../components";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Dashboard = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Search></Search>
      <Info></Info>
      <User></User>
    </main>
  );
};

export default Dashboard;
