import React from "react";
import Skip from "../components/Skip";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Site from "../components/Site";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";

const HomeView = () => {
  return (
    <>
      <Skip></Skip>
      <Header></Header>
      <Main>
        <Intro></Intro>
        <Skill></Skill>
        <Site></Site>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </Main>
      <Footer></Footer>
    </>
  );
};

export default HomeView;
