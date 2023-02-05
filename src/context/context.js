import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";

const axios = require("axios").default;
axios.defaults.baseURL = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  // request loading
  const [requests, setRequests] = useState(0);

  const searchGithubUser = async (user) => {
    const res = await axios.get(`users/${user}`).catch((err) => {
      console.log(err);
    });

    if (res) {
      setGithubUser(res.data);
      console.log(res);
      const { followers_url, login } = res.data;

      await Promise.allSettled([
        axios.get(`/users/${login}/repos`),
        axios.get(`${followers_url}?per_page=100`),
      ]).then((results) => {
        const [repos, followers] = results;
        const fulfilledStatus = "fulfilled";
        if (repos.status === fulfilledStatus) {
          setRepos(repos.value.data);
        }
        if (followers.status === fulfilledStatus) {
          setFollowers(followers.value.data);
        }
      });
    } else {
      getRemainingRequests();
      console.log("no such user");
    }
  };

  const getRemainingRequests = () => {
    axios
      .get("/rate_limit")
      .then(({ data }) => {
        let { remaining } = data.rate;
        setRequests(remaining);
        console.log("getRemainingRequests", remaining);
        if (remaining == 0) {
          //throw error
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => getRemainingRequests());
  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        searchGithubUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
