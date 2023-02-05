import React from "react";
import { Info, User, Search, Navbar, ListRepos } from "../components";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";
import Card from "../components/Card";
import styled from "styled-components";

const MyRepos = () => {
  return (
    <section className="section">
      <Navbar></Navbar>
      <Wrapper>
        <Card></Card>
        <ListRepos></ListRepos>
      </Wrapper>
      <div>
        <button className="btn">
          <a href="/">Back Home</a>
        </button>
      </div>
    </section>
  );
};

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  /* align-items: start; */
`;
export default MyRepos;
